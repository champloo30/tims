import React from 'react'

import prisma from '@/libs/prismadb'

import { getCurrentUser } from '../../actions/getCurrentUser'

import Main from '@/components/homepage/main'
import getUser from '../../actions/getUser'
import { User } from '@prisma/client'
// import { getPosts } from '../../actions/getPosts'

interface HomeProps {
  params: { url: string }
}

const Home:React.FC<HomeProps> = async ({ params }) => {
  const currentUser = await getCurrentUser()
  const allPosts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  const url = params.url

  return (
    <Main currentUser={currentUser} params={url} posts={allPosts} />
  )
}

export default Home