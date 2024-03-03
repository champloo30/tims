import React from 'react'

import prisma from '@/libs/prismadb'

import { getCurrentUser } from '../../actions/getCurrentUser'

import Main from '@/components/homepage/main'
import getUser from '../../actions/getUser'
import { User } from '@prisma/client'
// import { getPosts } from '../../actions/getPosts'

interface HomeProps {
  user: User | null
  params: { url: string }
}

const Home:React.FC<HomeProps> = async ({ params, user }) => {
  const currentUser = await getCurrentUser()
  const allPosts = await prisma.post.findMany()
  user = await getUser(allPosts[0].userId)
  const url = params.url

  console.log(allPosts);

  return (
    <Main currentUser={currentUser} params={url} posts={allPosts} user={user} />
  )
}

export default Home