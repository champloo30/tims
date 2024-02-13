import React from 'react'
import { ChatBubble, Delete, Edit, Favorite } from '@mui/icons-material'

interface PostProps {
  edit: boolean,
  anon: boolean
}

const Post: React.FC<PostProps> = ({ edit, anon }) => {
  return (
    <div className='h-fit w-full flex justify-center items-center px-4 xl:px-32 py-4 gap-2 xl:gap-8 bg-old-lace dark:bg-raisin border-b-4 border-purple-dark dark:border-old-lace'>
      <div className='flex flex-col justify-center items-start gap-2'>
        <div className='w-full flex justify-between items-center gap-2'>
          <div className={`group p-2 flex justify-start xl:justify-center items-end xl:items-center gap-2 ${!anon && 'hover:bg-fade dark:hover:bg-fade-dark cursor-pointer'} rounded-md transition ease-in duration-150`}>
            <div className='h-14 w-14 bg-purple dark:bg-violet rounded-full'></div>
            <div className='px-1.5 py-1 flex flex-col items-start' title={anon ? '' : `View User Page`}>
              <p className='text-lg'>{anon ? `Anonymous` : `John Doe`}</p>
              <p className={`${!anon && 'text-xs group-hover:text-purple dark:group-hover:text-violet group-hover:underline transition ease-in duration-150'}`}>{anon ? `@_anonymous` : `@johndoe_20`}</p>
            </div>
          </div>
          {edit ? 
            <div className='flex justify-center items-center gap-2'>
              <Edit className='fill-purple dark:fill-violet hover:scale-125 cursor-pointer transition ease-in duration-150' titleAccess='Edit' />
              <Delete className='fill-danger dark:fill-danger-dark hover:scale-125 cursor-pointer transition ease-in duration-150' titleAccess='Delete' />
            </div>
            : null}
        </div>
        <div className='flex flex-col gap-4 xl:gap-2 text-sm'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus gravida quis blandit turpis. Molestie nunc non blandit massa enim nec dui nunc mattis. Scelerisque fermentum dui faucibus in ornare quam viverra. Pharetra et ultrices neque ornare aenean.</p>
          <hr className='border-fade dark:border-fade-dark' />
          <div className='flex justify-start items-center gap-4'>
            <p className='w-fit px-2 py-1.5 bg-fade dark:bg-fade-dark rounded-lg'>4h ago</p>
            <div className='h-1 w-1 bg-dark-armor dark:bg-old-lace rounded-full'></div>
            <div className='space-x-2'>
              <ChatBubble className='fill-purple dark:fill-white hover:scale-125 transition ease-in duration-150 cursor-pointer' titleAccess='Comment' />
              <span>0</span>
            </div>
            <div className='space-x-2'>
              <Favorite className='fill-purple dark:fill-white hover:scale-125 transition ease-in duration-150 cursor-pointer' titleAccess='Like' />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post