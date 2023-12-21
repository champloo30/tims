'use client'

import React, { useState } from 'react'

import { useSession } from 'next-auth/react'
import { User } from '@prisma/client'
import axios from 'axios'
import toast from 'react-hot-toast'

import MyHome from '@/components/homepage/myHome'
import DesktopNav from '@/components/nav/desktopNav'
import MobileNav from '@/components/nav/mobileNav'

import AddUsername, { UsernameData } from '@/components/ui/form/usernameForm'

interface MainProps {
  currentUser: User | null
}

const Main:React.FC<MainProps> = ({ currentUser }) => {
  const { status } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const json = JSON.parse(JSON.stringify(currentUser))

  async function submit(formData: UsernameData) {
    console.log(formData);
    setIsLoading(true)
    axios.post('/api/username', formData)
    .then(() => {
      toast.success('Username created')
    })
    .catch(() => {toast.error('Something went wrong')})
    .finally(() => {setIsLoading(false)})
  }

  return (
    <main className="relative flex">
      {status === 'authenticated' && json.username === '' ?
        <div className='absolute h-screen w-screen z-50 flex justify-center items-center bg-old-lace/90 dark:bg-raisin/90'>
          <AddUsername onSubmit={submit} isLoading={isLoading} />
        </div>
        : null
      }
      <DesktopNav currentUser={currentUser} />
      <MobileNav currentUser={currentUser} />
      <MyHome currentUser={currentUser} />
    </main>
  )
}

export default Main