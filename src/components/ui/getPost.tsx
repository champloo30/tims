import React from 'react'

import { ChatBubble, Delete, Edit, Favorite } from '@mui/icons-material'

import { dateFormatter } from '@/libs/formatter'
import LikeForm, { LikeData } from './form/likeForm'
import { Post, User } from '@prisma/client'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

interface GetPostProps {
  id: string,
  user: string,
  edit?: boolean,
  anon?: boolean,
  title?: string,
  content?: string,
  createdAt: Date,
  updatedAt: Date,
  likingUsers?: number,
  currentUser: User | null,
  posts: Post[]
}

const GetPost: React.FC<GetPostProps> = ({ id, user, edit, anon, title, content, createdAt, likingUsers, currentUser, posts }) => {
  const postJson = JSON.parse(JSON.stringify(posts))
  const { status } = useSession()
  const router = useRouter()

  async function submit(formData: LikeData) {
    console.log(formData);
    const likingUser = formData.likingUser
    const likedPost = formData.likedPost

    try {
      if (postJson.likingUsers.includes(currentUser?.id)) {
        axios.delete('/api/like', { data: { likingUser, likedPost } }).then(() => {
          toast.success(`Liked @${user}`)
          router.refresh()
        })
      } else {
        axios.post('/api/like', formData).then(() => {
          toast.success(`Unliked @${user}`)
          router.refresh()
        })
      }
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  return (
    <div className='h-fit w-full flex justify-start items-center px-4 xl:px-32 py-4 gap-2 xl:gap-8 bg-old-lace dark:bg-raisin border-b-4 border-dark-armor dark:border-old-lace'>
      <div className='w-full flex flex-col justify-center items-start gap-2'>
        <div className='w-full flex justify-between items-center gap-2'>
          <a className={`group p-2 flex justify-start xl:justify-center items-end xl:items-center gap-2 ${!anon && 'hover:bg-fade dark:hover:bg-fade-dark cursor-pointer'} rounded-md transition ease-in duration-150`} href={`/${user}`} title={anon ? '' : `View @${user}`}>
            <div className='h-14 w-14 bg-purple dark:bg-violet rounded-full'></div>
            <div className='px-1.5 py-1 flex flex-col items-start'>
              <p className='text-lg'>{anon ? `Anonymous` : `John Doe`}</p>
              <p className={`text-xs ${!anon && 'group-hover:text-purple dark:group-hover:text-violet group-hover:underline transition ease-in duration-150'}`}>{anon ? `@_anonymous` : `@${user}`}</p>
            </div>
          </a>
          {edit ? 
            <div className='flex justify-center items-center gap-2'>
              <Edit className='fill-purple dark:fill-violet hover:scale-125 cursor-pointer transition ease-in duration-150' titleAccess='Edit' />
              <Delete className='fill-danger dark:fill-danger-dark hover:scale-125 cursor-pointer transition ease-in duration-150' titleAccess='Delete' />
            </div>
            : null}
        </div>
        <div className='w-full flex flex-col gap-4 text-sm'>
          <div className='flex flex-col gap-1'>
            <h2 className='text-lg'>{title}</h2>
            <p>{content}</p>
          </div>
          <hr className='w-full border-fade dark:border-fade-dark' />
          <div className='flex justify-start items-center gap-4'>
            <p className='w-fit px-2 py-1.5 bg-fade dark:bg-fade-dark rounded-lg'>{dateFormatter(createdAt)}</p>
            <div className='h-1 w-1 bg-dark-armor dark:bg-old-lace rounded-full'></div>
            <div className='space-x-2'>
              {
                status === 'authenticated' ? 
                <ChatBubble className='fill-purple dark:fill-white hover:scale-125 transition ease-in duration-150 cursor-pointer' titleAccess='Comment' /> :
                <button onClick={() => router.push('/login')}>
                  <ChatBubble className='fill-purple dark:fill-white hover:scale-125 transition ease-in duration-150 cursor-pointer' titleAccess='Comment' />
                </button>
              }
              <span className='text-purple/50 dark:text-old-lace/30'>2.7k</span>
            </div>
            <div className='flex items-center gap-2'>
              {
                status === 'authenticated' ? 
                <LikeForm currentUser={currentUser} onSubmit={submit} id={id} /> :
                <button onClick={() => router.push('/login')}>
                  <Favorite className='fill-purple dark:fill-white hover:scale-125 transition ease-in duration-150 cursor-pointer' titleAccess='Like' />
                </button>
              }
              <span className='text-purple/50 dark:text-old-lace/30'>{likingUsers !== undefined && likingUsers > 0 ? likingUsers : null}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetPost