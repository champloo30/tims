'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Profile, User } from '@prisma/client'

import Bio from '@/components/profilepage/bio'
import Posts from '@/components/profilepage/posts'

interface MyProfileProps {
  currentUser: User | null
  user: User | null
  profile: Profile | null
}

const MyProfile:React.FC<MyProfileProps> = ({ currentUser, user, profile }) => {
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      router.push('/login')
      router.refresh()
    }
  }, [currentUser, router])

  return (
    <section className='relative h-screen xl:w-[80vw] top-14 xl:top-0 xl:left-[20vw] bg-old-lace' aria-label='My Profile'>
      <div className='h-full w-full'>
        {currentUser && 
          <Bio currentUser={currentUser} user={user} profile={profile} />
        }
        <Posts currentUser={currentUser} />
      </div>
    </section>
  )
}

export default MyProfile