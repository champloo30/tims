'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { User } from '@prisma/client'

import Bio from '@/components/profilepage/bio'
import Posts from '@/components/profilepage/posts'

interface MyProfileProps {
  currentUser: User | null
  user: User | null
  params: string
}

const MyProfile:React.FC<MyProfileProps> = ({ currentUser, user, params }) => {
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      router.push('/login')
      router.refresh()
    }
  }, [currentUser, router])

  return (
    <section className='relative h-screen xl:w-[75vw] top-14 xl:top-0 xl:left-[25vw] bg-old-lace' aria-label='My Profile'>
      <div className='h-full w-full'>
        {currentUser && 
          <Bio currentUser={currentUser} user={user} params={params} />
        }
        <Posts currentUser={currentUser} />
      </div>
    </section>
  )
}

export default MyProfile