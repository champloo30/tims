'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/button'

interface UsernameFormProps {
  onSubmit: (data: UsernameData) => void,
  isLoading: boolean
}

export interface UsernameData {
  username: string
}

const UsernameForm:React.FC<UsernameFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<UsernameData>({
    username: ''
  })
  const [invalid, setInvalid] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (formData.username === '') {
      setInvalid(true)
    } else {
      onSubmit(formData)
      setInvalid(false)
    }
  }

  return (
    <form className='h-full w-5/6 sm:w-1/2 flex flex-col justify-center items-center space-y-2' onSubmit={handleSubmit}>
      {invalid ? <p className='text-lg text-danger dark:text-danger-dark text-center'>Please create a username</p> : null}
      <div className='w-full flex justify-start items-center'>
        <input 
          autoComplete='off' 
          className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'} focus:outline-none disabled:cursor-not-allowed`} 
          name='username' 
          type='text' 
          placeholder='' 
          disabled={isLoading} 
          value={formData.username.toLowerCase()}
          onChange={handleChange}
        />
        <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-purple dark:text-violet'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='email'>Username</label>
      </div>
      <Button type='submit'>Create Username</Button>
    </form>
  )
}

export default UsernameForm