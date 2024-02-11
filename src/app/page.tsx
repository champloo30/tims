import React from 'react'

import { getCurrentUser } from '../../actions/getCurrentUser'

import Main from '@/components/homepage/main'

const Home = async ({ params }: { params: { url: string } }) => {
  const currentUser = await getCurrentUser()
  const url = params.url

  console.log(url);
  

  return (
    <Main currentUser={currentUser} params={url} />
  )
}

export default Home