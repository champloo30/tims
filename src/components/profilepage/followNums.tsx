import { User } from '@prisma/client'
import React from 'react'
// import useFollow from '@/hooks/useFollow'

interface FollowNumsProps {
  currentUser: User | null
  user: User | null
  // params: string
  // isFollowing: boolean
}

const FollowNums:React.FC<FollowNumsProps> = ({ currentUser, user, 
  // isFollowing 
}) => {
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