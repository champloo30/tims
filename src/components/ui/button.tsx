import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  type: string,
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <>
      {type === 'button' ? <button className='h-12 w-full flex justify-center items-center gap-2 bg-purple dark:bg-violet hover:bg-purple/90 text-2xl text-old-lace rounded-lg' type='button' onClick={onClick}>{children}</button> : null}
      {type === 'submit' ? <button className='h-12 w-full flex justify-center items-center gap-2 bg-purple dark:bg-violet hover:bg-purple/90 text-2xl text-old-lace rounded-lg' type='submit' onClick={onClick}>{children}</button> : null}
      {type === 'reset' ? <button className='h-12 w-full flex justify-center items-center gap-2 bg-purple dark:bg-violet hover:bg-purple/90 text-2xl text-old-lace rounded-lg' type='reset' onClick={onClick}>{children}</button> : null}
    </>
    
  )
}

export default Button