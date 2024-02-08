'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Moon from '@/components/icons/moon'
import Sun from '@/components/icons/sun'
import { MoreVert } from '@mui/icons-material'

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
    // <button onClick={() => currentTheme === 'dark' ? setTheme('light') : setTheme('dark')}>
    //   {theme === 'dark' ? <Moon /> : <Sun />}
    // </button>
    <button className='group/theme absolute w-full z-30 py-1 flex group-hover/theme:bg-purple dark:group-hover/theme:bg-violet rounded-md'>
      <MoreVert />
    </button>
  )
}

export default ThemeTogglerSide