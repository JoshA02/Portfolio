'use server';

import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

interface ContactFormData {
  email: string;
  message: string;
  recaptchaToken: string;
}

interface ContactResult {
  success: boolean;
  error?: string;
}

// Verify reCAPTCHA token with Google
async function verifyRecaptcha(token: string, recaptchaAction: string): Promise<boolean> {

  const client = new RecaptchaEnterpriseServiceClient();
  try {
    const projectPath = client.projectPath(process.env.GOOGLE_CLOUD_PROJECT || '');
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const request = {
      event: {
        token,
        siteKey: siteKey || '',
      },
      parent: projectPath,
    };

    const [response] = await client.createAssessment(request);

    // Check if the token is valid.
    if (!response?.tokenProperties?.valid) {
      console.log(`The CreateAssessment call failed because the token was: ${response?.tokenProperties?.invalidReason}`);
      return false;
    }

    // Check if the expected action was executed.
    // The `action` property is set by user client in the grecaptcha.enterprise.execute() method.
    if (response.tokenProperties.action === recaptchaAction) {
      // Get the risk score and the reason(s). https://cloud.google.com/recaptcha/docs/interpret-assessment
      if(!response?.riskAnalysis?.score) {
        console.log("No risk analysis score returned");
        return false;
      }
      
      console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
      response.riskAnalysis.reasons?.forEach((reason) => {
        console.log(reason);
      });

      return response.riskAnalysis.score >= 0.5 || false; // Adjust threshold as needed
    }

    console.log(`The action "${response.tokenProperties.action}" did not match expected action "${recaptchaAction}"`);
    return false;

  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  } finally {
    client.close();
  }
}

async function sendEmailViaPostmark(email: string, message: string): Promise<boolean> {
  const postmarkToken = process.env.POSTMARK_API_TOKEN;
  const fromEmail = 'hello@joshaaron.me';
  const toEmail = 'hello@joshaaron.me';

  if (!postmarkToken) {
    console.warn('Postmark API token not configured');
    console.log('Contact form submission:');
    console.log('From:', email);
    console.log('Message:', message);
    return false;
  }

  try {
    const response = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': postmarkToken,
      },
      body: JSON.stringify({
        From: fromEmail,
        To: toEmail,
        ReplyTo: email,
        Subject: `Portfolio Contact Form: Message from ${email}`,
        TextBody: `New contact form submission:\n\nFrom: ${email}\n\nMessage:\n${message}`,
        HtmlBody: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${email}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        MessageStream: 'outbound',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Postmark error:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to send email via Postmark:', error);
    return false;
  }
}

export async function sendContactEmail(data: ContactFormData): Promise<ContactResult> {
  const { email, message, recaptchaToken } = data;

  if (!email || !email.includes('@')) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  if (!message || message.trim().length < 10) {
    return { success: false, error: 'Please enter a message (at least 10 characters)' };
  }

  if (process.env.RECAPTCHA_SECRET_KEY) {
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken, 'CONTACT_FORM_SUBMISSION');
    if (!isValidRecaptcha) {
      return { success: false, error: 'reCAPTCHA verification failed. Please try again.' };
    }
  }

  const emailSent = await sendEmailViaPostmark(email, message);
  if (!emailSent) {
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }

  return { success: true };
}
