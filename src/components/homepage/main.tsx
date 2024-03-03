'use client'

import React, { useState } from 'react'

import { useSession } from 'next-auth/react'
import { Post, User } from '@prisma/client'
import axios from 'axios'
import toast from 'react-hot-toast'

import MyHome from '@/components/homepage/myHome'
import DesktopNav from '@/components/nav/desktopNav'
import MobileNav from '@/components/nav/mobileNav'

import AddUsername, { UsernameData } from '@/components/ui/form/usernameForm'

interface MainProps {
  currentUser: User | null,
  posts: Post[],
  params: string,
  user: User | null
}

export interface PostProps {
  id: string,
  userId: string,
  title: string | null,
  content: string,
  draft: boolean | null,
  anonymous: boolean | null,
  updatedAt: Date,
  liker: string[] | null,
  liking: string[] | null
}

const Main:React.FC<MainProps> = ({ currentUser, posts, params, user }) => {
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
      <MyHome currentUser={currentUser} posts={posts} user={user} />
    </main>
  )
}

export default Main