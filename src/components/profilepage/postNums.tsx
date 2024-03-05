import { Post } from '@prisma/client'
import React from 'react'

interface PostNumsProps {
  posts: Post[]
  anonPosts: Post[]
}

const PostNums:React.FC<PostNumsProps> = ({ posts, anonPosts }) => {
  const postJson = JSON.parse(JSON.stringify(posts))
  const anonJson = JSON.parse(JSON.stringify(anonPosts))

  return (
    <>
      <li className='flex flex-col sm:flex-row justify-start items-start sm:gap-1'>
        <span>{postJson.length}</span>
        <span className='text-purple dark:text-violet'>Posts</span>
      </li>
      <li className='flex flex-col sm:flex-row justify-start items-start sm:gap-1'>
        <span>{anonJson.length}</span>
        <span className='text-purple dark:text-violet'>Anon Posts</span>
      </li>
    </>
  )
}

export default PostNums