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

  // get all user posts
  const allUserPosts = await prisma.post.findMany({
    where: {
      userId: user?.id
    },
    orderBy: {
      id: 'desc'
    }
  })

  // get all user anonymous post
  const anonPosts = await prisma.post.findMany({
    where: {
      userId: user?.id,
      anonymous: true
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
      <MyProfile currentUser={currentUser} posts={allUserPosts} anonPosts={anonPosts} user={user} params={username} />
    </>
  )
}

export default Home