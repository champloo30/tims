'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import { Post, User } from '@prisma/client'

import { useSession } from 'next-auth/react'
import axios from 'axios'
import toast from 'react-hot-toast'

import SavePostForm, { SavePostData } from '@/components/ui/form/savePostForm'

import { Bookmark } from '@mui/icons-material'

interface SavePostProps {
  currentUser: User
  posts: Post[]
  id: string
  user: string | undefined | null
  savingUsers?: string[]
}

const SavePost:React.FC<SavePostProps> = ({ currentUser, posts, id, savingUsers }) => {
  const { status } = useSession()
  const router = useRouter()

  async function submit(formData: SavePostData) {
    const savingUser = formData.savingUser
    const savedPost = formData.savedPost
    const currentPost = posts.find((post) => post.id === id)

    try {
      if (currentPost?.savingUsers.includes(currentUser.id)) {
        axios.delete('/api/savePost', { data: { savingUser, savedPost } }).then(() => {
          location.reload()
        })
      } else {
        axios.post('/api/savePost', formData).then(() => {
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
        <SavePostForm currentUser={currentUser} onSubmit={submit} id={id} posts={posts} /> :
        <button onClick={() => router.push('/login')}>
          <Bookmark className='stroke-2 stroke-dark-armor/50 fill-old-lace dark:stroke-old-lace/50 dark:fill-raisin cursor-pointer' titleAccess='Save' />
        </button>
      }
      <span className='text-dark-armor/50 dark:text-old-lace/50'>{savingUsers !== undefined && savingUsers.length > 0 ? savingUsers.length : null}</span>
    </div>
  )
}

export default SavePost