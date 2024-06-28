import React from 'react'

export default function Comment({message}: {message: string}) {
  return (
    <p className='inline text-lightgray font-normal'>&nbsp;&nbsp;// {message}</p>
  )
}
