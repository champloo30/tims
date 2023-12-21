'use client'

import React, { useState } from 'react'
import PostFilter from '@/components/profilepage/postFilter'
import Post from '@/components/ui/post'
import { User } from '@prisma/client'

interface PostsProps {
  currentUser: User | null
}

const Posts:React.FC<PostsProps> = ({ currentUser }) => {
  const [active, setActive] = useState('All Post')

  return (
    <>
      <PostFilter filter={active} />
      <Post edit={true} anon={false} />
      <Post edit={true} anon={true} />
      <Post edit={true} anon={false} />
      <Post edit={true} anon={true} />
    </>
  )
}

export default Posts