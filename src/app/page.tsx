import React from 'react'

import { getCurrentUser } from '../../actions/getCurrentUser'

import Main from '@/components/homepage/main'

const Home = async () => {
  const currentUser = await getCurrentUser()

  return (
    <Main currentUser={currentUser} />
  )
}

export default Home