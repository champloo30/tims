import React from 'react'

import { getCurrentUser } from '../../../../../actions/getCurrentUser';

import MySettings from '@/components/settingspage/mySettings'
import DesktopNav from '@/components/nav/desktopNav'
import MobileNav from '@/components/nav/mobileNav';

const Settings = async () => {
  const currentUser = await getCurrentUser()
  return (
    <>
      <DesktopNav currentUser={currentUser} />
      <MobileNav currentUser={currentUser} />
      <MySettings />
    </>
  )
}

export default Settings