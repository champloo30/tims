'use client'

import React from 'react'
import { useTheme } from 'next-themes'

import Facebook from '@/components/icons/socialMedia/facebook'
import Instagram from '@/components/icons/socialMedia/instagram'
import YouTube from '@/components/icons/socialMedia/youTube'
import ThemeToggler from '@/components/icons/themeToggler'

const MySettings = () => {
  const { theme } = useTheme()

  return (
    <section className='relative h-full w-[80vw] left-[20vw] px-16 py-8 space-y-8 bg-old-lace dark:bg-raisin' aria-label='My Settings'>
      <h1 className='text-6xl font-bold'>Settings</h1>
      {/* account */}
      <div className='flex flex-col justify-start items-start gap-4'>
        <h2 className='text-3xl text-purple dark:text-violet'>Account</h2>
        <div className='h-12 w-full flex justify-between items-center text-xl'>
          <div className='h-full w-4/5 px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet'>Name</p>
            <p>John Doe</p>
          </div>
          <button className='h-full w-48 bg-purple dark:bg-violet text-old-lace rounded-lg'>Update Name</button>
        </div>
        <div className='h-12 w-full flex justify-between items-center text-xl'>
          <div className='h-full w-4/5 px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet'>Username</p>
            <p>@johndoe_20</p>
          </div>
          <button className='h-full w-48 bg-purple dark:bg-violet text-old-lace rounded-lg'>Update Username</button>
        </div>
        <div className='h-12 w-full flex justify-between items-center text-xl'>
          <div className='h-full w-4/5 px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet'>Email</p>
            <p>johndoe20@gmail.com</p>
          </div>
          <button className='h-full w-48 bg-purple dark:bg-violet text-old-lace rounded-lg'>Update Email</button>
        </div>
        <div className='h-12 w-full flex justify-between items-center text-xl'>
          <div className='h-full w-4/5 px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet'>Password</p>
            <ul className='flex gap-px'>
              <li className='h-4 w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-4 w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-4 w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-4 w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-4 w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-4 w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-4 w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-4 w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
            </ul>
          </div>
          <button className='h-full w-48 bg-purple dark:bg-violet text-old-lace rounded-lg'>Update Password</button>
        </div>
        <div className='h-12 w-full flex justify-between items-center text-xl'>
          <div className='h-full w-4/5 px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet'>Link</p>
            <p>johndoe.com</p>
          </div>
          <button className='h-full w-48 bg-purple dark:bg-violet text-old-lace rounded-lg'>Update Link</button>
        </div>
        <div className='h-12 w-full flex justify-between items-center text-xl'>
          <div className='h-full w-4/5 px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet'>Social Media</p>
            <ul className='flex gap-2'>
              <li><Facebook /></li>
              <li><Instagram /></li>
              <li><YouTube /></li>
            </ul>
          </div>
          <button className='h-full w-48 bg-purple dark:bg-violet text-old-lace rounded-lg'>Update Socials</button>
        </div>
      </div>
      {/* display */}
      <div className='flex flex-col justify-start items-start gap-4'>
        <h2 className='text-3xl text-purple dark:text-violet'>Display</h2>
        <div className='flex justify-start items-center gap-4 text-xl'>
          <p>Display Theme:</p>
          <p className='text-purple dark:text-violet capitalize'>{theme}</p>
          <ThemeToggler />
        </div>
      </div>
      <div className='group p-2 flex justify-center items-center hover:bg-danger/20 dark:hover:bg-danger-dark rounded-lg cursor-pointer transition-all duration-200'>
        <p className='text-danger dark:text-danger-dark dark:group-hover:text-old-lace capitalize transition-all duration-200'>deactivate account</p>
      </div>
      <footer className='flex flex-col justify-center items-center gap-1'>
        <h2 className='text-2xl text-purple dark:text-violet capitalize'>this is my story</h2>
        <a className='group flex' href="http://djldev.com" target="_blank" rel="noopener noreferrer">Designed & Developed by <p className='ml-1 text-purple dark:text-violet group-hover:underline'>DJLDev</p></a>
      </footer>
    </section>
  )
}

export default MySettings