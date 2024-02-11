import React from 'react'
import Edit from '@/components/icons/edit'
import Comment from '@/components/icons/comment'
import Heart from '@/components/icons/heart'
import Delete from '@/components/icons/delete'
import { ChatBubble, Favorite } from '@mui/icons-material'

interface PostProps {
  edit: boolean,
  anon: boolean
}

const Post: React.FC<PostProps> = ({ edit, anon }) => {
  return (
    <div className='h-fit w-full flex justify-center items-center px-4 xl:px-32 py-4 xl:py-8 gap-2 xl:gap-8 bg-old-lace dark:bg-raisin border-b-4 border-purple-dark dark:border-old-lace'>
      <div className='flex flex-col xl:flex-row justify-center items-start gap-4 xl:gap-8'>
        <div className='w-full xl:w-fit flex xl:flex-col justify-between xl:justify-center items-end xl:items-center gap-4'>
          <div className='flex xl:flex-col justify-start xl:justify-center items-end xl:items-center gap-2'>
            <div className='h-16 xl:h-24 w-16 xl:w-24 bg-purple dark:bg-violet rounded-full'></div>
            <div className='flex flex-col items-start xl:items-center'>
              <p>{anon ? `Anonymous` : `John Doe`}</p>
              <p className={edit || anon ? `` : `lg:hover:text-purple dark:lg:hover:text-violet lg:hover:underline cursor-pointer transition-all ease-linear duration-150`} title='View User Page'>{anon ? `@_anonymous` : `@johndoe_20`}</p>
            </div>
          </div>
          <div>
            {edit ? 
              <div className='flex justify-center items-center gap-2'>
                <div className='cursor-pointer' title='Edit Post'>
                  <Edit />
                </div>
                <div className='cursor-pointer' title='Delete Post'>
                  <Delete />
                </div>
              </div>
             : null}
          </div>
        </div>
        <div className='flex flex-col gap-4 xl:gap-4'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus gravida quis blandit turpis. Molestie nunc non blandit massa enim nec dui nunc mattis. Scelerisque fermentum dui faucibus in ornare quam viverra. Pharetra et ultrices neque ornare aenean.</p>
          <p className='w-fit p-2 bg-fade dark:bg-fade-dark rounded-lg'>4h ago</p>
          <div className='flex justify-start items-center xl:gap-2'>
            <ChatBubble fontSize='large' />
            <Favorite fontSize='large' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post