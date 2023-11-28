'use client'

import MyProfile from '@/components/profilepage/myProfile'
import SideNav from '@/components/sideNav'
import React from 'react'
import { ThemeProvider } from 'next-themes'

const Home = () => {
  return (
    <ThemeProvider attribute='class'>
      <SideNav />
      <MyProfile />
    </ThemeProvider>
  )
}

export default Home