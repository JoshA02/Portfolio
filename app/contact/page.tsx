'use client';

import {useState} from 'react';
import './style.css';

export default function Contact() {
  const [charCount, setCharCount] = useState(0);
  const [doShake, setDoShake] = useState(false);
  const maxLength = 2500;

  // Update character count
  function updateCharCount(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    setCharCount(e.currentTarget.value.length);

    // Shake if user types too much. Ignore non-character keys (Enter, Backspace, Delete, Arrow keys)
    if (charCount < maxLength || e.key === 'Enter' || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      return;
    }

    setDoShake(true);
    setTimeout(() => setDoShake(false), 300); // Reset doShake after 1 second
  }

  // Submit form
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(e.currentTarget.checkValidity()){
      return alert('Form submitted!');
    }

    alert('Please fill in the form correctly.');
  }

  return (
    <form onSubmit={(e) => submitForm(e)} noValidate className='bg-container px-4 py-7 rounded-t-md md:w-3/4 lg:w-1/2 xl:w-1/3 w-3/4 flex flex-col'>
      <h1>Get in touch!</h1>
      
      <span>email</span>
      <input type='email' required placeholder='email@domain.com'/>

      <span>message</span>
      <div className={'flex flex-col relative mb-3' + (doShake ? ' shake' : '')}>
        <textarea required placeholder='Your message here' className='min-h-80 mb-0 resize-y max-h-full' maxLength={maxLength} onKeyDown={(e) => updateCharCount(e)}/>

        {/* Char count: */}
        <span className={'text-right absolute right-2 bottom-0' + (charCount >= maxLength ? ' urgent animate' : '')}>{charCount}/{maxLength}</span>
      </div>
      <button className='bg-container'>Send</button>
    </form>
  );
}