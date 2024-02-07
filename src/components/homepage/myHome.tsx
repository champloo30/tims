'use client'

import React from 'react'
import LoadPosts from '@/components/homepage/loadPosts'
import Post from '@/components/ui/post'
import { User } from '@prisma/client'

interface MyHomeProps {
  currentUser: User | null
}

const MyHome:React.FC<MyHomeProps> = ({ currentUser }) => {
  
  return (
    <section className='relative h-full w-full xl:w-[80vw] top-14 xl:top-0 xl:left-[20vw] lg:flex flex-col bg-old-lace' aria-label='my home'>
      <LoadPosts />
      <Post edit={false} anon={false} />
      <Post edit={false} anon={true} />
      <Post edit={false} anon={false} />
      <Post edit={false} anon={true} />
      <Post edit={false} anon={false} />
      <Post edit={false} anon={true} />
    </section>
  )
}

export default MyHome