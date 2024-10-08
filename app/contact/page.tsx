'use client';

import {useEffect, useRef, useState} from 'react';
import './style.css';
import {useFormState, useFormStatus} from 'react-dom';
import {submitContact} from '@/actions/submitContact';
import ReCAPTCHA from 'react-google-recaptcha';

const MAX_MSG_LENGTH = 2500;

const initialFormState: {email: string, message: string, recaptchaToken: string} = {
  email: '',
  message: '',
  recaptchaToken: ''
};

function SubmitButton({disabled}: {disabled: boolean}) {
  const {pending} = useFormStatus();
  return <button disabled={pending || disabled} className='bg-container min-[400px]:absolute'>Send</button>
}

export default function Contact() {
  const [formState, formAction] = useFormState(submitContact, initialFormState);
  
  const [charCount, setCharCount] = useState(0);
  const [doShake, setDoShake] = useState(false);
  
  const [formValid, setFormValid] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');

  // When the form receives a response
  useEffect(() => {
    setStatusMessage(formState?.message || '');
    
    recaptchaRef.current?.reset(); // Reset recaptcha after submission
    setRecaptchaToken(''); // Reset recaptcha token after submission
    setFormValid(formRef.current?.checkValidity() || false); // Reset form validity after submission to update UI

    if(formState?.message.toLowerCase().startsWith('error')){
      return;
    }

    // Clear form if submission was successful
    formRef.current?.reset();
    setCharCount(0);
  }, [formState]);

  useEffect(() => {
    if(recaptchaToken === '') return; // Don't send if token hasn't been generated yet

    // Submit form if token has been generated.
    // This will trigger the submitForm function again, but this time the token will be present...
    // Therefore, the server action will be called.
    return submitForm();
  }, [recaptchaToken])
  

  // See if the user has typed too much. If so, shake the textarea
  function checkMessageLimit(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    // Shake if user types too much. Ignore non-character keys (Enter, Backspace, Delete, Arrow keys)
    if (charCount < MAX_MSG_LENGTH || e.key === 'Enter' || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      return;
    }

    setDoShake(true);
    setTimeout(() => setDoShake(false), 300); // Reset doShake after 1 second
  }

  // Check validity via HTML validation before submitting
  function submitForm(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    if(!formRef.current?.checkValidity()){
      alert('Please fill out all fields correctly');
      return;
    }

    // Hasn't been generated yet. Prevent form submission and generate a token.
    if(recaptchaToken === ''){
      setStatusMessage('Sending...');
      return recaptchaRef.current?.execute();
    }

    // Token has been generated. Submit form.
    const formData = new FormData(formRef.current);
    return formAction(formData);
  }
  

  return (
    <main className='flex justify-center'>
      <form ref={formRef} onChange={() => setFormValid(formRef.current?.checkValidity() || false)} onSubmit={(e) => submitForm(e)} noValidate className='bg-container bg-opacity-30 px-4 pt-7 pb-16 rounded-lg md:w-3/4 xl:w-3/6 w-full flex flex-col'>
        <h1>Get in touch!</h1>
        <h3>Don't like forms? You can reach me at <a className='font-bold' target='_blank' href='mailto:hello@joshaaron.me'>hello@joshaaron.me</a></h3>
        <h3 className={(statusMessage?.toLowerCase().startsWith('error')) ? 'text-danger' : 'text-primary'}>{statusMessage}</h3>

        <span className='tooltip'>email</span>
        <input type='email' name='email' required placeholder='email@domain.com'/>

        <span className='tooltip'>message</span>
        <div className={'flex flex-col relative mb-3' + (doShake ? ' shake' : '')}>
          <textarea required name='message' placeholder='Your message here' className='min-h-80 mb-0 resize-y max-h-full' maxLength={MAX_MSG_LENGTH} onChange={(e) => setCharCount(e.currentTarget.textLength)} onKeyDown={(e) => checkMessageLimit(e)}/>
          <span className={'tooltip text-right absolute right-2 bottom-0' + (charCount >= MAX_MSG_LENGTH ? ' urgent animate' : '')}>{charCount}/{MAX_MSG_LENGTH}</span>
        </div>
        <div className='flex flex-col min-[400px]:flex-row relative'>
          <SubmitButton disabled={!formValid}/>
          <input type='hidden' required pattern='^(?!\s*$).+' name='recaptchaToken' value={recaptchaToken || ''}/>
          <ReCAPTCHA className='mt-3 min-[400px]:mt-0 min-[400px]:absolute min-[400px]:right-0' badge='inline' size='invisible' ref={recaptchaRef} theme='dark' sitekey='6LcZggkqAAAAANPjo6nn5Q5qdnpgKcHDixIt30EC'
            onChange={(token) => setRecaptchaToken(token || '')}
            onErrored={() => setStatusMessage('Error: Recaptcha failed. Please try again.')}
          />
        </div>
      </form>
    </main>
  );
}