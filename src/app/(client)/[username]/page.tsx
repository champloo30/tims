import React from 'react'

import prisma from '@/libs/prismadb'

import { getCurrentUser } from '../../../../actions/getCurrentUser'
import getUser from '../../../../actions/getUser'

import MyProfile from '@/components/profilepage/myProfile'
import DesktopNav from '@/components/nav/desktopNav'
import MobileNav from '@/components/nav/mobileNav'

const Home = async ({ params }: { params: { username: string } }) => {
  const currentUser = await getCurrentUser()

  // get all user posts
  const allUserPosts = await prisma.post.findMany({
    where: {
      userId: params.username
    },
    orderBy: {
      id: 'desc'
    }
  })

  // get all user anonymous
  const anonPosts = await prisma.post.findMany({
    where: {
      userId: params.username,
      anonymous: true
    },
    orderBy: {
      id: 'desc'
    }
  })

  // get all user drafts
  const draftPosts = await prisma.post.findMany({
    where: {
      userId: params.username,
      draft: true
    },
    orderBy: {
      id: 'desc'
    }
  })
  
  const user = await getUser(params.username)
  const username = params.username

  return (
    <>
      <DesktopNav currentUser={currentUser} />
      <MobileNav currentUser={currentUser} />
      <MyProfile currentUser={currentUser} posts={allUserPosts} anonPosts={anonPosts} draftPosts={draftPosts} user={user} params={username} />
    </>
  )
}

export default Home