'use client'

import React, { useState } from 'react'
import PostFilter from '@/components/profilepage/postFilter'
import GetPost from '@/components/ui/post'
import { User } from '@prisma/client'

interface PostsProps {
  currentUser: User | null
}

const Posts:React.FC<PostsProps> = ({ currentUser }) => {
  const [active, setActive] = useState('All Post')

  return (
    <>
      <PostFilter filter={active} />
      {/* <GetPost edit={true} anon={false} />
      <GetPost edit={true} anon={true} />
      <GetPost edit={true} anon={false} />
      <GetPost edit={true} anon={true} /> */}
    </>
  )
}

export default Posts