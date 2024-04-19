import React from 'react'

import prisma from '@/libs/prismadb'

import { getCurrentUser } from '../../../../actions/getCurrentUser'
import getUser from '../../../../actions/getUser'

import MyProfile from '@/components/profilepage/myProfile'
import DesktopNav from '@/components/nav/desktopNav'
import MobileNav from '@/components/nav/mobileNav'

interface ProfileProps {
  params: { username: string }
}

const Home: React.FC<ProfileProps> = async ({ params }) => {
  const currentUser = await getCurrentUser()

  // get user
  const user = await getUser(params.username)

  // get all users
  const getAllUsers = await prisma.user.findMany()

  // get all user posts
  const allUserPosts = await prisma.post.findMany({
    where: {
      userId: user?.id
    },
    orderBy: {
      id: 'desc'
    }
  })

  // get all user anonymous posts
  const anonPosts = await prisma.post.findMany({
    where: {
      userId: user?.id,
      anonymous: true
    },
    orderBy: {
      id: 'desc'
    }
  })

  // get all user saved posts
  const savedPosts = await prisma.post.findMany({
    where: {
      savingUsers: {
        has: user?.id
      }
    },
    orderBy: {
      id: 'desc'
    }
  })

  const username = params.username

  return (
    <>
      <DesktopNav currentUser={currentUser} />
      <MobileNav currentUser={currentUser} />
      <MyProfile currentUser={currentUser} allUsers={getAllUsers} posts={allUserPosts} anonPosts={anonPosts} savedPosts={savedPosts} user={user} params={username} />
    </>
  )
}

export default Home