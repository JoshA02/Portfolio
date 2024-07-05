'use client';

import {RefObject, useEffect, useRef, useState} from 'react';
import './style.css';
import {useFormState, useFormStatus} from 'react-dom';
import {submitContact} from '@/actions/submitContact';
import ReCAPTCHA from 'react-google-recaptcha';

const initialFormState: {email: string, message: string, recaptchaToken: string} = {
  email: '',
  message: '',
  recaptchaToken: ''
};

function SubmitButton({disabled}: {disabled: boolean}) {
  const {pending} = useFormStatus();

  return <button disabled={pending || disabled} className='bg-container'>Send</button>
}

export default function Contact() {
  const [formState, formAction] = useFormState(submitContact, initialFormState);
  const [charCount, setCharCount] = useState(0);
  const [doShake, setDoShake] = useState(false);
  const maxLength = 2500;
  const [formValid, setFormValid] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const recaptchaBox = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    if(!formState?.message.toLowerCase().startsWith('error')) {
      // Clear form after response received
      formRef.current?.reset();
      setCharCount(0);
    }
    recaptchaBox.current?.reset();
    validateForm('');
    return setStatusMessage(formState?.message || '');
  }, [formState])
  

  // See if the user has typed too much. If so, shake the textarea
  function checkMessageLimit(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    // Shake if user types too much. Ignore non-character keys (Enter, Backspace, Delete, Arrow keys)
    if (charCount < maxLength || e.key === 'Enter' || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      return;
    }

    setDoShake(true);
    setTimeout(() => setDoShake(false), 300); // Reset doShake after 1 second
  }

  function validateForm(captchaToken: string) {
    setFormValid( (formRef.current?.checkValidity() || false) && captchaToken!='');
    setRecaptchaToken(captchaToken);
  }

  // Check validity via HTML validation before submitting
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    if(!e.currentTarget.checkValidity()){
      alert('Please fill out all fields correctly');
      return e.preventDefault(); // Prevent form submission
    }

    // Allow form submission (default behavior)
    setStatusMessage('Sending...');
  }

  return (
    <main className='flex justify-center'>
      <form action={formAction} ref={formRef} onChange={() => validateForm(recaptchaToken)} onSubmit={(e) => submitForm(e)} noValidate className='bg-container bg-opacity-30 px-4 py-7 rounded-lg md:w-3/4 lg:w-1/2 xl:w-1/3 w-full flex flex-col'>
        <h1>Get in touch!</h1>
        <h3 className={(statusMessage?.toLowerCase().startsWith('error')) ? 'text-danger' : 'text-primary'}>{statusMessage}</h3>

        <span className='tooltip'>email</span>
        <input type='email' name='email' required placeholder='email@domain.com'/>

        <span className='tooltip'>message</span>
        <div className={'flex flex-col relative mb-3' + (doShake ? ' shake' : '')}>
          <textarea required name='message' placeholder='Your message here' className='min-h-80 mb-0 resize-y max-h-full' maxLength={maxLength} onChange={(e) => setCharCount(e.currentTarget.textLength)} onKeyDown={(e) => checkMessageLimit(e)}/>

          {/* Char count: */}
          <span className={'tooltip text-right absolute right-2 bottom-0' + (charCount >= maxLength ? ' urgent animate' : '')}>{charCount}/{maxLength}</span>
        </div>

        <input type='hidden' required pattern='^(?!\s*$).+' name='recaptchaToken' value={recaptchaToken || ''}/>
        <ReCAPTCHA className='mb-3' ref={recaptchaBox} theme='dark' sitekey='6LdYywgqAAAAAB53B4dT4KfDUa6etSpupFYoHfJy'
          onExpired={() => validateForm('')}
          onErrored={() => {validateForm('')}}
          onChange={(token) => validateForm(token||'')}
        />

        <SubmitButton disabled={!formValid}/>
      </form>
    </main>
  );
}