'use client'

import React, { useState } from 'react'
import { Post, User } from '@prisma/client'
import { Favorite } from '@mui/icons-material'

interface LikeFormProps {
  currentUser: User,
  posts: Post[],
  id: string,
  onSubmit: (data: LikeData) => void
}

export interface LikeData {
  likingUser: string
  likedPost: string
}

const LikeForm:React.FC<LikeFormProps> = ({ currentUser, id, onSubmit, posts }) => {
  const json = JSON.parse(JSON.stringify(currentUser))

  const [formData, setFormData] = useState<LikeData>({
    likingUser: json.id,
    likedPost: id
  })

  const currentPost = posts.find((post) => post.id === id)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    onSubmit(formData)
  }

  return (
    <form className='flex justify-center items-center' onSubmit={handleSubmit}>
      <div className='hidden flex-col justify-start items-center'>
        <input 
          name='followingUser' 
          type='text' 
          placeholder='' 
          defaultValue={formData.likingUser}
        />
        <input 
          name='followedUser' 
          type='text' 
          placeholder='' 
          defaultValue={formData.likedPost}
        />
      </div>
      <button type="submit">
        <Favorite className={`${currentPost?.likingUsers.includes(currentUser.id) ? 'fill-purple dark:fill-violet' : 'stroke-2 stroke-dark-armor/50 fill-old-lace dark:stroke-old-lace/50 dark:fill-raisin'} cursor-pointer`} titleAccess={currentPost?.likingUsers.includes(currentUser.id) ? 'Unlike' : 'Like'} />
      </button>
    </form>
  )
}

export default LikeForm