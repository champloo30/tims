'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Autorenew } from '@mui/icons-material'

import prisma from '@/libs/prismadb'

const LoadPosts = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <a className='group h-10 w-full flex justify-center items-center gap-2 bg-purple dark:bg-violet text-old-lace cursor-pointer' href='/' title='Load New Posts' aria-label='Load New Posts' onClick={() => setIsLoading(true)}>
      <Autorenew className={`${isLoading && 'animate-spin'}`} />
      <p className='text-xl'>Load New Posts</p>
    </a>
  )
}

export default LoadPosts