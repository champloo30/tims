'use client'

import GoBack from '@/components/icons/goBack'
import ProfileForm, { ProfileData } from '@/components/ui/form/profileForm'
import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

interface EditProfileProps {
  currentUser: User | null
}

const EditProfile:React.FC<EditProfileProps> = ({ currentUser }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const json = JSON.parse(JSON.stringify(currentUser))
  
  async function submit(formData: ProfileData) {
    console.log(formData);
    setIsLoading(true)
    axios.post('/api/profile', formData)
    .then(() => {
      toast.success('Profile updated successfully')
      router.push(`/${currentUser?.username}`)
      router.refresh()
    })
    .catch(() => {toast.error('Something went wrong')})
    .finally(() => {setIsLoading(false)})
  }

  return (
    <section className='h-screen w-screen flex flex-col justify-center items-center bg-old-lace dark:bg-raisin' aria-label='registration page'>
      <div className='h-full w-full px-8 lg:px-16 flex flex-col justify-center items-center gap-6'>
        <h1 className='text-4xl sm:text-5xl text-purple dark:text-violet'>Edit Profile</h1>
        <ProfileForm onSubmit={submit} isLoading={isLoading} currentUser={currentUser} />
      </div>
      <div className='absolute top-8 left-10 cursor-pointer'>
        <GoBack href={`/${json.username}`} location='My Profile' />
      </div>
    </section>
  )
}

export default EditProfile