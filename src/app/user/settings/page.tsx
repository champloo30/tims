'use client'

import MySettings from '@/components/settingspage/mySettings'
import SideNav from '@/components/sideNav'
import React from 'react'
import { ThemeProvider } from 'next-themes';

const Settings = () => {
  return (
    <ThemeProvider attribute='class'>
      <SideNav />
      <MySettings />
    </ThemeProvider>
  )
}

export default Settings