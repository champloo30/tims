'use client'

import React, { Dispatch, SetStateAction } from 'react'

import { useRouter } from 'next/navigation'

import { useSession } from 'next-auth/react'
import { ChatBubble } from '@mui/icons-material'

interface CommentPostProps {
  showComments: boolean
  setShowComments: Dispatch<SetStateAction<boolean>>
}

const CommentPost:React.FC<CommentPostProps> = ({ showComments, setShowComments }) => {
  const { status } = useSession()
  const router = useRouter()

  return (
    <div className='space-x-2'>
      {
        status === 'authenticated' ? 
        <button onClick={() => setShowComments(!showComments)}>
          <ChatBubble className='stroke-2 stroke-dark-armor/50 fill-old-lace dark:stroke-old-lace/50 dark:fill-raisin cursor-pointer' titleAccess='Comment' />
        </button> :
        <button onClick={() => router.push('/login')}>
          <ChatBubble className='stroke-2 stroke-dark-armor/50 fill-old-lace dark:stroke-old-lace/50 dark:fill-raisin cursor-pointer' titleAccess='Comment' />
        </button>
      }
      <span className='text-purple/50 dark:text-old-lace/30'></span>
    </div>
  )
}

export default CommentPost