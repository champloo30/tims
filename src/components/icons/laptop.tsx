'use client'

import React from 'react'
import { useTheme } from "next-themes"

const Laptop = () => {
  const { setTheme, systemTheme } = useTheme()

  const system = () => {
    if (systemTheme === 'dark') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <div onClick={() => system()} title='Change Theme To System'>
      <svg className='h-10 w-10 stroke-purple dark:stroke-violet cursor-pointer' viewBox="0 0 24 24" fill="none">
        <path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16M2 16H22V16.8C22 17.9201 22 18.4802 21.782 18.908C21.5903 19.2843 21.2843 19.5903 20.908 19.782C20.4802 20 19.9201 20 18.8 20H5.2C4.0799 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V16Z" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    </div>
    
  )
}

export default Laptop