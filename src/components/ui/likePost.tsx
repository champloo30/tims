'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import { Post, User } from '@prisma/client'

import { useSession } from 'next-auth/react'
import axios from 'axios'
import toast from 'react-hot-toast'

import LikeForm, { LikeData } from '@/components/ui/form/likeForm'

import { Favorite } from '@mui/icons-material'

interface LikePostProps {
  currentUser: User
  posts: Post[]
  id: string
  user: string | undefined | null
  likingUsers?: string[]
}

const LikePost:React.FC<LikePostProps> = ({ currentUser, posts, id, likingUsers }) => {
  const { status } = useSession()
  const router = useRouter()

  async function submit(formData: LikeData) {
    const likingUser = formData.likingUser
    const likedPost = formData.likedPost
    const currentPost = posts.find((post) => post.id === id)

    try {
      if (currentPost?.likingUsers.includes(currentUser.id)) {
        axios.delete('/api/like', { data: { likingUser, likedPost } }).then(() => {
          location.reload()
        })
      } else {
        axios.post('/api/like', formData).then(() => {
          location.reload()
        })
      }
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  return (
    <div className='flex items-center gap-2'>
      {
        status === 'authenticated' ? 
        <LikeForm currentUser={currentUser} onSubmit={submit} id={id} posts={posts} /> :
        <button onClick={() => router.push('/login')}>
          <Favorite className='stroke-2 stroke-dark-armor/50 fill-old-lace dark:stroke-old-lace/50 dark:fill-raisin cursor-pointer' titleAccess='Like' />
        </button>
      }
      <span className='text-dark-armor/50 dark:text-old-lace/50'>{likingUsers !== undefined && likingUsers.length > 0 ? likingUsers.length : null}</span>
    </div>
  )
}

export default LikePost