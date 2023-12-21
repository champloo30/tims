import React, { useState } from 'react'

import { getCurrentUser } from '../../../../../actions/getCurrentUser'

import EditProfile from '@/components/profilepage/editProfile'

const Page = async () => {
  const currentUser = await getCurrentUser()

  return (
    <EditProfile currentUser={currentUser} />
  )
}

export default Page