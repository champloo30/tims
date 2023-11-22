import React from 'react'
import LoadPosts from '@/components/homepage/loadPosts'
import Post from '@/components/ui/post'

const MyHome = () => {
  return (
    <section className='relative h-full w-[80vw] sm:left-[20vw] flex flex-col bg-old-lace' aria-label='my home'>
      <LoadPosts />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  )
}

export default MyHome