import { User } from '@prisma/client'
import React from 'react'

interface FollowNumsProps {
  user: User | null
}

const FollowNums:React.FC<FollowNumsProps> = ({ user }) => {
  const userJson = JSON.parse(JSON.stringify(user))

  return (
    <>
      <li className='flex flex-col sm:flex-row justify-start items-start sm:gap-1'>
        <span>{userJson.followers?.length}</span>
        <span className='text-purple dark:text-violet'>Followers</span>
      </li>
      <li className='flex flex-col sm:flex-row justify-start items-start sm:gap-1'>
        <span>{userJson.following?.length}</span>
        <span className='text-purple dark:text-violet'>Following</span>
      </li>
    </>
  )
}

export default FollowNums