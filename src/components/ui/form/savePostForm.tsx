'use client'

import React, { useState } from 'react'
import { Post, User } from '@prisma/client'
import { Bookmark } from '@mui/icons-material'

interface SavePostFormProps {
  currentUser: User,
  posts: Post[],
  id: string,
  onSubmit: (data: SavePostData) => void
}

export interface SavePostData {
  savingUser: string
  savedPost: string
}

const SavePostForm:React.FC<SavePostFormProps> = ({ currentUser, id, onSubmit, posts }) => {
  const json = JSON.parse(JSON.stringify(currentUser))

  const [formData] = useState<SavePostData>({
    savingUser: json.id,
    savedPost: id
  })

  const currentPost = posts.find((post) => post.id === id)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    onSubmit(formData)
  }

  return (
    <form className='flex justify-center items-center' onSubmit={handleSubmit}>
      <button type="submit">
        <Bookmark className={`${currentPost?.savingUsers.includes(currentUser.id) ? 'stroke-2 stroke-purple fill-purple dark:stroke-violet dark:fill-violet' : 'stroke-2 stroke-dark-armor/50 fill-old-lace dark:stroke-old-lace/50 dark:fill-raisin'} cursor-pointer`} titleAccess={currentPost?.savingUsers.includes(currentUser.id) ? 'Unlike' : 'Like'} />
      </button>
    </form>
  )
}

export default SavePostForm