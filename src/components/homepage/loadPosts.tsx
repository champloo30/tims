import React from 'react'
import Refresh from '@/components/icons/refresh'

const LoadPosts = () => {
  return (
    <div className='group h-10 w-full flex justify-center items-center gap-2 bg-purple dark:bg-violet text-old-lace cursor-pointer' title='Load New Posts' aria-label='Load New Posts'>
      <Refresh />
      <p className='text-xl'>Load New Posts</p>
    </div>
  )
}

export default LoadPosts