import React from 'react'

import prisma from '@/libs/prismadb'

import { getCurrentUser } from '../../actions/getCurrentUser'

import DesktopNav from '@/components/nav/desktopNav'
import MobileNav from '@/components/nav/mobileNav'
import { Post, User } from '@prisma/client'
import MyHome from '@/components/homepage/myHome'


export interface PostProps {
  id: string,
  name: string,
  userId: string,
  title: string | null,
  content: string,
  draft: boolean | null,
  anonymous: boolean | null,
  updatedAt: Date,
  liker: string[] | null,
  liking: string[] | null
}

const Home = async () => {
  const currentUser = await getCurrentUser()
  const allPosts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <main className="relative flex">
      <DesktopNav currentUser={currentUser} />
      <MobileNav currentUser={currentUser} />
      <MyHome currentUser={currentUser} posts={allPosts} />
    </main>
  )
}

export default Home