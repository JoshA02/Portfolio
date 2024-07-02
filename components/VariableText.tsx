import React from 'react'

export default function VariableText({name, type, value, className}: {name: string, type: string, value: React.ReactNode, className?: string}) {
  return (
    <p className={'text-lightgray ' + className}><span className='text-code-a'>const</span> <span className='text-code-b'>{name}</span>: <span className='text-code-c'>{type}</span> =
      <span className='text-white'>
        {value}
      </span>;
    </p>
  )
}
