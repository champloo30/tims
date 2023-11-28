'use client'

import MyProfile from '@/components/profilepage/myProfile'
import LargeNav from '@/components/nav/largeNav'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import MobileNav from '@/components/nav/mobileNav'

const Home = () => {
  return (
    <ThemeProvider attribute='class'>
      <LargeNav />
      <MobileNav />
      <MyProfile />
    </ThemeProvider>
  )
}

export default Home