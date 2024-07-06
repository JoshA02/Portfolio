'use server';

import assert from 'assert';
import Postmark, {AccountClient, ServerClient} from 'postmark';

/**
 * Server action; utilised by the client-side form submission in app/contact/page.tsx
 * @param _prevState the previous state of the form
 * @param formData the form data submitted by the user
 * @returns a message to display to the user. For negative cases, the message must be prefixed with 'Error: ' for the front-end to render it as an error message.
 */
export async function submitContact(_prevState: any, formData: FormData) {
  assert(formData instanceof FormData, 'formData must be an instance of FormData');
  assert(typeof formData.get('email') === 'string', 'email must be a string');
  assert(typeof formData.get('message') === 'string', 'message must be a string');
  assert(typeof formData.get('recaptchaToken') === 'string', 'recaptchaToken must be a string');
  assert(process.env.RECAPTCHA_SECRET, 'RECAPTCHA_SECRET must be set in .env');
  assert(process.env.POSTMARK_API_KEY, 'POSTMARK_API_KEY must be set in .env');
  assert(process.env.PERSONAL_EMAIL, 'PERSONAL_EMAIL must be set in .env');
  assert(process.env.POSTMARK_MESSAGE_STREAM, 'POSTMARK_MESSAGE_STREAM must be set in .env');

  // console.log('submitContact', formData.get('email'), formData.get('message'), 'recaptchaToken:', formData.get('recaptchaToken'));
  
  // Validate form. This shouldn't be necessary, but just in case...
  if (!formData.get('email') || !formData.get('message') || !formData.get('recaptchaToken')) {
    return {message: 'Error: Please fill out all fields'};
  }

  console.log('Attempting to validate recaptcha...');

  // validate recaptchaToken
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `secret=${process.env.RECAPTCHA_SECRET}&response=${formData.get('recaptchaToken')}`
  });

  try {
    const recaptchaResponse = await response.json();
    if (!recaptchaResponse?.success) {
      throw new Error();
    }
  } catch (e) {
    return {message: 'Error: Recaptcha failed. Please try again.'};
  }

  console.log('Attempting to send email...');

  try{
    const client = new ServerClient(process.env.POSTMARK_API_KEY as string);
    await client.sendEmail({
      From: process.env.PERSONAL_EMAIL as string,
      To: process.env.PERSONAL_EMAIL as string,
      Subject: 'Contact Form Submission',
      HtmlBody: `Message received from <strong>${formData.get('email')}</strong><br><br>${formData.get('message')}<br>`,
      TextBody: `Message received from ${formData.get('email')}\n\n${formData.get('message')}`,
      MessageStream: process.env.POSTMARK_MESSAGE_STREAM
    });
    return {message: 'Response received!'}; // Success
  } catch (e) {
    console.error('Error sending email:', e);
    return {message: `Error: Failed to send email. Please try again.\nIf this persists, please contact me directly at ${process.env.PERSONAL_EMAIL}`};
  }
}