import React from 'react'

import prisma from '@/libs/prismadb'

import { getCurrentUser } from '../../actions/getCurrentUser'

import Main from '@/components/homepage/main'
// import { getPosts } from '../../actions/getPosts'

const Home = async ({ params }: { params: { url: string } }) => {
  const currentUser = await getCurrentUser()
  const allPosts = await prisma.post.findMany()
  const url = params.url

  console.log(allPosts);

  return (
    <Main currentUser={currentUser} params={url} posts={allPosts} />
  )
}

export default Home