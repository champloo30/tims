import React from 'react'

interface FilterProps {
  filter: string
}

const PostFilter: React.FC<FilterProps> = ({ filter }, active: string) => {
  return (
    <div className='h-16 w-full flex justify-center items-center bg-purple dark:bg-violet text-old-lace'>
      <ul className='flex justify-center items-center gap-6 sm:gap-8 lg:gap-16 text-sm sm:text-lg md:text-xl'>
        <li className='group flex flex-col items-center hover:scale-125 cursor-pointer transition-all duration-200'>
          <p>All Posts</p>
          <div className='hidden h-px w-8 bg-old-lace group-hover:block'></div>
        </li>
        <li className='group flex flex-col items-center hover:scale-125 cursor-pointer transition-all duration-200'>
          <p>Anonymous Posts</p>
          <div className='hidden h-px w-8 bg-old-lace group-hover:block'></div>
        </li>
        <li className='group flex flex-col items-center hover:scale-125 cursor-pointer transition-all duration-200'>
          <p>Drafts</p>
          <div className='hidden h-px w-8 bg-old-lace group-hover:block'></div>
        </li>
        <li className='group flex flex-col items-center hover:scale-125 cursor-pointer transition-all duration-200'>
          <p>Likes</p>
          <div className='hidden h-px w-8 bg-old-lace group-hover:block'></div>
        </li>
      </ul>
    </div>
  )
}

export default PostFilter