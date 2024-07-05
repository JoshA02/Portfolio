'use server';

/**
 * Server action; utilised by the client-side form submission in app/contact/page.tsx
 * @param _prevState the previous state of the form
 * @param formData the form data submitted by the user
 * @returns a message to display to the user. For negative cases, the message must be prefixed with 'Error: ' for the front-end to render it as an error message.
 */
export async function submitContact(_prevState: any, formData: FormData) {
  console.log('submitContact', formData.get('email'), formData.get('message'), 'recaptchaToken:', formData.get('recaptchaToken'));
  
  // Validate form
  if (!formData.get('email') || !formData.get('message'))
    return {message: 'Error: Please fill out all fields'};

  // validate recaptchaToken
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `secret=${process.env.RECAPTCHA_SECRET}&response=${formData.get('recaptchaToken')}`
  });

  const recaptchaResponse = await response.json();
  if (!recaptchaResponse?.success) {
    return {message: 'Error: Recaptcha failed'};
  }
  return {message: 'Response received!'};
}