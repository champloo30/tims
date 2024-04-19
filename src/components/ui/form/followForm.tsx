'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/button'
import { User } from '@prisma/client'

interface FollowFormProps {
  currentUser: User,
  user: User | null,
  onSubmit: (data: FollowData) => void
}

export interface FollowData {
  followingUser: string
  followedUser: string
}

const FollowForm:React.FC<FollowFormProps> = ({ currentUser, user, onSubmit }) => {
  const json = JSON.parse(JSON.stringify(currentUser))
  const userJson = JSON.parse(JSON.stringify(user))

  const [formData] = useState<FollowData>({
    followingUser: json.username,
    followedUser: userJson.username
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    onSubmit(formData)
  }

  return (
    <form className='flex flex-col justify-center items-center space-y-2' onSubmit={handleSubmit}>
      <Button outline title={userJson.followers.includes(json.id) ? `Unfollow ${userJson.username}` : `Follow ${userJson.username}`}>{userJson.followers.includes(json.id) ? 'Unfollow' : 'Follow'}</Button>
    </form>
  )
}

export default FollowForm