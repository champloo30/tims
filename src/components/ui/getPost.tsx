'use client'

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { dateFormatter } from '@/libs/formatter'

import { Post, User } from '@prisma/client'

import CommentPost from '@/components/ui/commentPost'
import LikePost from '@/components/ui/likePost'
import SavePost from '@/components/ui/savePost'

import { Delete, Edit } from '@mui/icons-material'

interface GetPostProps {
  id: string,
  name: string | undefined | null,
  user: string | undefined | null,
  img: string | undefined | null,
  edit?: boolean,
  anon?: boolean,
  title?: string,
  content?: string,
  createdAt: Date,
  updatedAt: Date,
  likingUsers?: string[],
  savingUsers?: string[],
  currentUser: User,
  posts: Post[]
}

const GetPost: React.FC<GetPostProps> = ({ id, name, user, img, edit, anon, title, content, createdAt, likingUsers, savingUsers, currentUser, posts }) => {
  const [showComments, setShowComments] = useState(false)

  return (
    <div className='h-fit w-full flex flex-col justify-start items-center px-4 py-4 gap-2 xl:gap-8 bg-old-lace dark:bg-raisin border-b-4 border-dark-armor dark:border-old-lace'>
      <div className='w-full xl:px-28 flex flex-col justify-center items-start gap-2'>
        <div className='w-full flex justify-between items-center gap-2'>
          <a className={`group p-2 flex justify-start xl:justify-center items-end xl:items-center gap-2 ${!anon && 'hover:bg-fade dark:hover:bg-fade-dark cursor-pointer'} rounded-md transition ease-in duration-150`} href={`/${user}`} title={anon ? '' : `View @${user}`}>
            <div className='h-14 w-14 bg-purple dark:bg-violet rounded-full'>
              {img !== null && 
                <Image 
                  className='h-full w-full rounded-full'
                  src={img}
                  height={100}
                  width={100}
                  alt='Profile Image'
                />
              }
            </div>
            <div className='px-1.5 py-1 flex flex-col items-start'>
              <p className='text-lg'>{anon ? `Anonymous` : name !== null ? `${name}` : ''}</p>
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
            <CommentPost showComments={showComments} setShowComments={setShowComments} />
            <LikePost currentUser={currentUser} posts={posts} id={id} user={user} likingUsers={likingUsers} />
            <SavePost currentUser={currentUser} posts={posts} id={id} user={user} savingUsers={savingUsers} />
          </div>
        </div>
      </div>
      {showComments && 
        <div className='w-full px-4 space-y-2 text-sm'>
          <hr className='w-full border-fade dark:border-fade-dark' />
          <div className='xl:px-24'>
            <p>Be the first to comment on this post!</p>
          </div>
        </div>
      }
    </div>
  )
}

export default GetPost