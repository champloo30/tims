import React from 'react'

import { getCurrentUser } from '../../../../actions/getCurrentUser'

import MyProfile from '@/components/profilepage/myProfile'
import DesktopNav from '@/components/nav/desktopNav'
import MobileNav from '@/components/nav/mobileNav'
import getUser from '../../../../actions/getUser'
import getProfile from '../../../../actions/getProfile'

const Home = async ({ params }: { params: { username: string } }) => {
  const currentUser = await getCurrentUser()
  const user = await getUser(params.username)
  const profile = await getProfile(params.username)

  return (
    <>
      <DesktopNav currentUser={currentUser} />
      <MobileNav currentUser={currentUser} />
      <MyProfile currentUser={currentUser} user={user} profile={profile} />
    </>
  )
}

export default Home