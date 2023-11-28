'use client'

import React, { useState } from 'react'
import PostFilter from '@/components/profilepage/postFilter'
import Post from '@/components/ui/post'

const Posts = () => {
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