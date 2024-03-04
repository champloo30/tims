'use client'

import React, { useState } from 'react'
import { Post, User } from '@prisma/client'
import { Favorite } from '@mui/icons-material'

interface LikeFormProps {
  currentUser: User | null,
  id: string,
  onSubmit: (data: LikeData) => void
}

export interface LikeData {
  likingUser: string
  likedPost: string
}

const LikeForm:React.FC<LikeFormProps> = ({ currentUser, id, onSubmit }) => {
  const json = JSON.parse(JSON.stringify(currentUser))

  const [formData, setFormData] = useState<LikeData>({
    likingUser: json.username,
    likedPost: id
  })

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
        <Favorite className='fill-purple dark:fill-white hover:scale-125 transition ease-in duration-150 cursor-pointer' titleAccess='Like' />
      </button>
    </form>
  )
}

export default LikeForm