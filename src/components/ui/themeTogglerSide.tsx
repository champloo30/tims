'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Moon from '@/components/icons/moon'
import Sun from '@/components/icons/sun'

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
  console.log(currentTheme);

  return (
    <button onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
      {theme === 'dark' ? <Moon /> : <Sun />}
    </button>
  )
}

export default ThemeTogglerSide