'use client'

import React from 'react'
import { useTheme } from 'next-themes'

import Facebook from '@/components/icons/socialMedia/facebook'
import Instagram from '@/components/icons/socialMedia/instagram'
import YouTube from '@/components/icons/socialMedia/youTube'
import MainThemeToggler from '@/components/ui/themeTogglerMain'

const MySettings = () => {
  const { theme } = useTheme()

  return (
    <section className='relative h-full sm:h-screen xl:h-full w-full xl:w-[80vw] top-14 xl:top-0 xl:left-[20vw] px-4 xl:px-16 py-4 xl:py-8 space-y-6 sm:space-y-12 xl:space-y-8 bg-old-lace dark:bg-raisin' aria-label='My Settings'>
      <h1 className='mt-4 xl:mt-0 text-5xl xl:text-6xl font-bold'>Settings</h1>
      {/* account */}
      <div className='flex flex-col justify-start items-start gap-3 sm:gap-4'>
        <h2 className='text-2xl lg:text-3xl text-purple dark:text-violet'>Account</h2>
        <div className='h-fit lg:h-12 w-full flex flex-col md:flex-row justify-between items-center gap-1 sm:gap-2 lg:gap-0 text-xl'>
          <div className='h-8 w-full md:w-3/4 lg:w-4/5 px-2 lg:px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet text-sm sm:text-base'>Name</p>
            <p className='text-sm sm:text-base'>John Doe</p>
          </div>
          <button className='h-8 w-full md:w-3/12 lg:w-48 bg-purple dark:bg-violet text-old-lace text-sm sm:text-base rounded-lg'>Update Name</button>
        </div>
        <div className='h-fit lg:h-12 w-full flex flex-col md:flex-row justify-between items-center gap-1 sm:gap-2 lg:gap-0 text-xl'>
          <div className='h-8 w-full md:w-3/4 lg:w-4/5 px-2 lg:px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet text-sm sm:text-base'>Username</p>
            <p className='text-sm sm:text-base'>@johndoe_20</p>
          </div>
          <button className='h-8 w-full md:w-3/12 lg:w-48 bg-purple dark:bg-violet text-old-lace text-sm sm:text-base rounded-lg'>Update Username</button>
        </div>
        <div className='h-fit lg:h-12 w-full flex flex-col md:flex-row justify-between items-center gap-1 sm:gap-2 lg:gap-0 text-xl'>
          <div className='h-8 w-full md:w-3/4 lg:w-4/5 px-2 lg:px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet text-sm sm:text-base'>Email</p>
            <p className='text-sm sm:text-base'>johndoe20@gmail.com</p>
          </div>
          <button className='h-8 w-full md:w-3/12 lg:w-48 bg-purple dark:bg-violet text-old-lace text-sm sm:text-base rounded-lg'>Update Email</button>
        </div>
        <div className='h-fit lg:h-12 w-full flex flex-col md:flex-row justify-between items-center gap-1 sm:gap-2 lg:gap-0 text-xl'>
          <div className='h-8 w-full md:w-3/4 lg:w-4/5 px-2 lg:px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet text-sm sm:text-base'>Password</p>
            <ul className='flex gap-px'>
              <li className='h-2 xl:h-4 w-2 xl:w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-2 xl:h-4 w-2 xl:w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-2 xl:h-4 w-2 xl:w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-2 xl:h-4 w-2 xl:w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-2 xl:h-4 w-2 xl:w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-2 xl:h-4 w-2 xl:w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-2 xl:h-4 w-2 xl:w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
              <li className='h-2 xl:h-4 w-2 xl:w-4 bg-dark-armor dark:bg-old-lace rounded-full'></li>
            </ul>
          </div>
          <button className='h-8 w-full md:w-3/12 lg:w-48 bg-purple dark:bg-violet text-old-lace text-sm sm:text-base rounded-lg'>Update Password</button>
        </div>
        <div className='h-fit lg:h-12 w-full flex flex-col md:flex-row justify-between items-center gap-1 sm:gap-2 lg:gap-0 text-xl'>
          <div className='h-8 w-full md:w-3/4 lg:w-4/5 px-2 lg:px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet text-sm sm:text-base'>Link</p>
            <p className='text-sm sm:text-base'>johndoe.com</p>
          </div>
          <button className='h-8 w-full md:w-3/12 lg:w-48 bg-purple dark:bg-violet text-old-lace text-sm sm:text-base rounded-lg'>Update Link</button>
        </div>
        <div className='h-fit lg:h-12 w-full flex flex-col md:flex-row justify-between items-center gap-1 sm:gap-2 lg:gap-0 text-xl'>
          <div className='h-8 w-full md:w-3/4 lg:w-4/5 px-2 lg:px-4 flex justify-between items-center bg-fade dark:bg-fade-dark rounded-lg'>
            <p className='text-purple dark:text-violet text-sm sm:text-base'>Social Media</p>
            <ul className='flex items-center gap-2'>
              <li><Facebook /></li>
              <li><Instagram /></li>
              <li><YouTube /></li>
            </ul>
          </div>
          <button className='h-8 w-full md:w-3/12 lg:w-48 bg-purple dark:bg-violet text-old-lace text-sm sm:text-base rounded-lg'>Update Socials</button>
        </div>
      </div>
      {/* display */}
      <div className='flex flex-col justify-start items-start gap-1 xl:gap-4'>
        <h2 className='text-2xl xl:text-3xl text-purple dark:text-violet'>Display</h2>
        <div className='flex justify-start items-center gap-4 xl:text-xl'>
          <p>Display Theme:</p>
          <p className='text-purple dark:text-violet capitalize'>{theme}</p>
          <MainThemeToggler />
        </div>
      </div>
      {/* deactivate account */}
      <div className='group p-2 flex justify-center items-center bg-danger/20 dark:bg-danger-dark xl:dark:bg-fade-dark xl:hover:bg-danger xl:dark:hover:bg-danger-dark rounded-lg cursor-pointer transition-all duration-200'>
        <p className='text-danger dark:text-old-lace xl:dark:text-danger-dark group-hover:text-old-lace capitalize transition-all duration-200'>deactivate account</p>
      </div>
      {/* footer */}
      <footer className='flex flex-col justify-center items-center gap-1'>
        <h2 className='text-xl sm:text-2xl text-purple dark:text-violet capitalize'>this is my story</h2>
        <a className='group flex text-sm sm:text-base' href="http://djldev.com" target="_blank" rel="noopener noreferrer">Designed & Developed by <p className='ml-1 text-purple dark:text-violet group-hover:underline'>DJLDev</p></a>
      </footer>
    </section>
  )
}

export default MySettings