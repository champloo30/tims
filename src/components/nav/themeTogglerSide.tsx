'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { DarkMode, LightMode, MoreVert } from '@mui/icons-material'

const ThemeTogglerSide = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button className='group p-1 bg-fade hover:bg-purple dark:bg-fade-dark dark:hover:bg-violet rounded-md ease-in-out duration-300' title={`Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`} onClick={() => currentTheme === 'dark' ? setTheme('light') : setTheme('dark')}>
      {theme === 'dark' ? <DarkMode fontSize='small' sx={{ color: 'oldlace' }} /> : <LightMode className='fill-purple group-hover:fill-old-lace' fontSize='small' />}
    </button>
  )
}

export default ThemeTogglerSide