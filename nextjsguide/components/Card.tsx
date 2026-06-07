import React from 'react'

type Props = {
    author:string;
    content:string;
}

const Card = ({author,content}: Props) => {
  return (
    <div className='flex flex-col w-full gap-y-2 ring-1 ring-blue-500 max-w-[400px]'>
        <h1>  {author} </h1>
        <p>{content} </p>
    
    </div>
  )
}

export default Card