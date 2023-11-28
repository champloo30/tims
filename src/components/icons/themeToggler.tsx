'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggler = () => {
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
    <button className='h-8 w-14 px-1 flex justify-start dark:justify-end items-center border-2 border-purple dark:border-violet rounded-full cursor-pointer' onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
      <div className='h-5 w-5 bg-purple dark:bg-violet rounded-full'></div>
    </button>
  )
}

export default ThemeToggler