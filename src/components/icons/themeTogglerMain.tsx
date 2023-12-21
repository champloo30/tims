'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Laptop from '@/components/icons/laptop'

const MainThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  console.log(currentTheme);
  
  
  return (
    <div className='flex items-center gap-4'>
      <button className='h-8 w-14 px-1 flex justify-start dark:justify-end items-center border-2 border-purple dark:border-violet rounded-full cursor-pointer' onClick={() => currentTheme === 'dark' ? setTheme('light') : setTheme('dark')} title={theme === 'dark' ? 'Change Theme To Light' : 'Change Theme To Dark'}>
        <div className='h-5 w-5 bg-purple dark:bg-violet rounded-full'></div>
      </button>
      <Laptop />
    </div>
  )
}

export default MainThemeToggler