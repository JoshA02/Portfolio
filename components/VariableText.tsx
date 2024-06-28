import React from 'react'

export default function VariableText({name, type, value, fontSize}: {name: string, type: string, value: React.ReactNode, fontSize?: string|null}) {
  return (
    <p className='text-lightgray' style={{fontSize: (fontSize || '14px')}}><span className='text-code-a'>const</span> <span className='text-code-b'>{name}</span>: <span className='text-code-c'>{type}</span> =
      <span className='text-white'>
        {value}
        {/* <span className='text-code-a'> “</span>Hey 👋, my name is <strong>Josh</strong>\n
        <br/>And I'm a junior full-stack developer studying Software Engineering at <strong>Nottingham Trent University</strong><span className='text-code-a'>”</span> */}
      </span>;
    </p>
  )
}
