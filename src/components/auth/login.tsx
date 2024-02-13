'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { User } from '@prisma/client'

import LoginForm, { UserData } from '@/components/ui/form/loginForm'

import Google from '@/components/icons/socialMedia/google'
import FacebookColor from '@/components/icons/socialMedia/facebookColor'
import GoBack from '@/components/icons/goBack'

interface LoginProps {
  currentUser: User | null
}

const Login:React.FC<LoginProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (currentUser) {
      router.push('/')
      router.refresh()
    }
  }, [currentUser, router])

  async function submit(formData: UserData) {
    console.log(formData);
    setIsLoading(true)
    signIn('credentials', {
      ...formData,
      redirect: false
    })
    .then((callback) => {
      if(callback?.ok) {
        router.push('/')
        router.refresh()
        toast.success('Logged In')
      }

      if(callback?.error) {
        toast.error(callback.error)
      }
    })
    .catch(() => {toast.error('Something went wrong')})
    .finally(() => {setIsLoading(false)})
  }

  return (
    <section className='h-screen w-screen flex flex-col justify-center items-center bg-old-lace dark:bg-raisin' aria-label='registration page'>
      <div className='h-full w-full lg:w-[60rem] px-8 lg:px-16 flex flex-col justify-center items-center gap-6'>
        <h1 className='text-4xl lg:text-5xl text-purple dark:text-violet text-center'>Welcome Back To T.I.M.S.</h1>
        <LoginForm onSubmit={submit} isLoading={isLoading} />
        <div className='w-full flex justify-center items-center gap-4'>
          <div className='h-px w-1/3 bg-purple dark:bg-violet'></div>
          <p>OR</p>
          <div className='h-px w-1/3 bg-purple dark:bg-violet'></div>
        </div>
        <div className='w-full flex flex-col lg:flex-row gap-4'>
          <button className='h-12 w-full flex justify-center items-center gap-2 bg-old-lace dark:bg-raisin hover:bg-red-600/20 dark:hover:bg-red-600/20 text-lg text-red-600 dark:text-old-lace border-2 border-red-600 rounded-lg' onClick={() => signIn('google')}>
            <span>Login With Google</span>
            <Google />
          </button>
          {/* will do facebook when more info is provided
          <button className='h-12 w-full flex justify-center items-center gap-1 bg-old-lace dark:bg-raisin hover:bg-blue-600/10 dark:hover:bg-blue-600/10 text-lg text-blue-800 dark:text-old-lace border-2 border-blue-800 rounded-lg' onClick={() => signIn('facebook')}>
            <span>Login With Facebook</span>
            <FacebookColor />
          </button> */}
        </div>
        <p className='group'>First time here? <Link className='text-purple lg:text-dark-armor dark:text-violet dark:lg:text-old-lace group-hover:text-purple group-hover:underline-purple group-hover:underline dark:group-hover:text-violet dark:group-hover:underline-violet dark:group-hover:underline transition-all duration-150' href='/register'>Register Here</Link></p>
      </div>
      <div className='absolute top-8 left-10 cursor-pointer'>
        <GoBack href={'/'} location='Home' />
      </div>
      {currentUser && <div className='absolute h-screen w-screen z-50 flex justify-center items-center bg-old-lace/90 dark:bg-raisin/90 text-purple dark:text-violet text-3xl'>Logged In. Redirecting...</div>}
    </section>
  )
}

export default Login