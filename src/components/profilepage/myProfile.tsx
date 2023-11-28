import React from 'react'
import Bio from '@/components/profilepage/bio'
import Posts from '@/components/profilepage/posts'

const MyProfile = () => {
  return (
    <section className='relative h-screen xl:w-[80vw] top-14 xl:top-0 xl:left-[20vw] bg-old-lace' aria-label='My Profile'>
      <Bio />
      <Posts />
    </section>
  )
}

export default MyProfile