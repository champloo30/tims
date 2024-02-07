import React from 'react'

import { getCurrentUser } from '../../../../actions/getCurrentUser'
import getUser from '../../../../actions/getUser'

import MyProfile from '@/components/profilepage/myProfile'
import DesktopNav from '@/components/nav/desktopNav'
import MobileNav from '@/components/nav/mobileNav'
// import useFollow from '@/hooks/useFollow'

const Home = async ({ params }: { params: { username: string } }) => {
  const currentUser = await getCurrentUser()
  const user = await getUser(params.username)
  const username = params.username
  // const { following, toggleFollow } = useFollow(user?.id as string, username)

  return (
    <>
      <DesktopNav currentUser={currentUser} />
      <MobileNav currentUser={currentUser} />
      <MyProfile currentUser={currentUser} user={user} params={username} 
      // isFollowing={following} toggleFollow={toggleFollow} 
      />
    </>
  )
}

export default Home