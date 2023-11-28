import React from 'react'
import Edit from '@/components/icons/edit'
import Comment from '@/components/icons/comment'
import Heart from '@/components/icons/heart'
import Delete from '@/components/icons/delete'

interface PostProps {
  edit: boolean,
  anon: boolean
}

const Post: React.FC<PostProps> = ({ edit, anon }) => {
  return (
    <div className='h-64 w-full flex justify-center items-center px-32 gap-8 bg-old-lace dark:bg-raisin border-b-4 border-purple-dark dark:border-old-lace'>
      <div className='flex justify-center items-start gap-8'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='h-24 w-24 bg-purple dark:bg-violet rounded-full'></div>
          <p className={edit === false || anon === false ? `lg:hover:text-purple dark:lg:hover:text-violet lg:hover:underline cursor-pointer transition-all ease-linear duration-150`: ``} title='View User Page'>{anon ? `@_anonymous` : `@johndoe_20`}</p>
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
        <div className='flex flex-col gap-9'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus gravida quis blandit turpis. Molestie nunc non blandit massa enim nec dui nunc mattis. Scelerisque fermentum dui faucibus in ornare quam viverra. Pharetra et ultrices neque ornare aenean.</p>
          <div className='flex justify-start items-center gap-2'>
            <form action="" method="post">
              <input className='h-10 w-[30rem] px-2 flex bg-old-lace dark:bg-raisin border-2 border-purple dark:border-violet rounded-full placeholder:text-dark-armor dark:placeholder:text-old-lace' type="text" name="comment" id="comment" placeholder='Comment...' />
            </form>
            <div className='cursor-pointer' title='View Comments'>
              <Comment />
            </div>
            <div className='cursor-pointer' title='Like User Post'>
              <Heart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post