'use client'

import MySettings from '@/components/settingspage/mySettings'
import LargeNav from '@/components/nav/largeNav'
import React from 'react'
import { ThemeProvider } from 'next-themes';
import MobileNav from '@/components/nav/mobileNav';

const Settings = () => {
  return (
    <ThemeProvider attribute='class'>
      <LargeNav />
      <MobileNav />
      <MySettings />
    </ThemeProvider>
  )
}

export default Settings