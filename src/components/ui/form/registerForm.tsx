'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/button'

interface RegisterFormProps {
  onSubmit: (data: UserData) => void,
  isLoading: boolean
}

export interface UserData {
  name: string,
  username: string,
  email: string,
  password: string,
  confirmPass: string
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, isLoading }: RegisterFormProps ) => {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPass: ''
  })
  const [invalid, setInvalid] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (formData.name === '' || formData.username === '' || formData.email === '' || formData.password === '' || formData.confirmPass === '') {
      setInvalid(true)
    } else {
      onSubmit(formData)
      setInvalid(false)
    }
  }

  return (
    <form className='w-full space-y-2' onSubmit={handleSubmit}>
      {invalid ? <p className='text-lg text-danger dark:text-danger-dark text-center'>Please complete all fields</p> : null}
      <div className='flex justify-start items-center'>
        <input 
          autoComplete='off' 
          className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'} focus:outline-none disabled:cursor-not-allowed`} 
          name='name' 
          type='text' 
          placeholder='' 
          disabled={isLoading} 
          value={formData.name}
          onChange={handleChange}
        />
        <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-purple dark:text-violet'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='name'>Name</label>
      </div>
      <div className='flex justify-start items-center'>
        <input 
          autoComplete='off' 
          className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'} focus:outline-none disabled:cursor-not-allowed`} 
          name='username' 
          type='text' 
          placeholder='' 
          disabled={isLoading} 
          value={formData.username}
          onChange={handleChange}
        />
        <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-purple dark:text-violet'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='username'>Username</label>
      </div>
      <div className='flex justify-start items-center'>
        <input 
          autoComplete='off' 
          className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'} focus:outline-none disabled:cursor-not-allowed`} 
          name='email' 
          type='email' 
          placeholder='' 
          disabled={isLoading} 
          value={formData.email}
          onChange={handleChange}
        />
        <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-purple dark:text-violet'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='email'>Email</label>
      </div>
      <div className='flex justify-start items-center'>
        <input 
          autoComplete='off' 
          className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'} focus:outline-none disabled:cursor-not-allowed`} 
          name='password' 
          type='password' 
          placeholder='' 
          disabled={isLoading} 
          value={formData.password}
          onChange={handleChange}
        />
        <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-purple dark:text-violet'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='password'>Password</label>
      </div>
      <div className='flex justify-start items-center'>
        <input 
          autoComplete='off' 
          className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'} focus:outline-none disabled:cursor-not-allowed`} 
          name='confirmPass' 
          type='password' 
          placeholder='' 
          disabled={isLoading} 
          value={formData.confirmPass}
          onChange={handleChange}
        />
        <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-purple dark:text-violet'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='confirmPass'>Confirm Password</label>
      </div>
      <Button type='submit'>Register</Button>
    </form>
  )
}

export default RegisterForm