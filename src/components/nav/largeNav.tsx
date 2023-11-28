import Link from 'next/link'
import React from 'react'
import ThemeTogglerSide from '../ui/themeTogglerSide'

const LargeNav = () => {
  return (
    <nav className='fixed h-screen w-[20vw] z-20 p-8 hidden xl:flex flex-col justify-between bg-old-lace dark:bg-raisin border-r-4 border-purple-dark dark:border-old-lace'>
      <div className='space-y-8'>
        <Link href="/"><h1 className='text-5xl text-purple dark:text-violet uppercase' title='T.I.M.S.' aria-label='T.I.M.S. Home'>t.i.m.s.</h1></Link>
        <ul className='flex flex-col gap-4'>
          <Link href="/"><li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Home'>my home</li></Link>
          <Link href='/user'><li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Profile'>my profile</li></Link>
          <Link href='/user/settings'><li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Settings'>my settings</li></Link>
          <li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='Boundless Courage Home'>boundless courage</li>
          <li>
            <button className='h-12 w-48 flex justify-center items-center gap-2 rounded-md bg-purple dark:bg-violet lg:hover:scale-105 transition ease-in duration-300' type='button'>
              <p className='text-2xl text-old-lace'>Post</p>
              <svg className='h-8 w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#FFFAFA" stroke-width="1.5"/>
                <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#FFFAFA" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div className=' group px-4 py-4 flex gap-2 hover:bg-fade dark:hover:bg-fade-dark rounded-lg cursor-pointer transition-all ease-linear duration-150'>
        <div className='h-12 w-12 bg-purple dark:bg-violet rounded-full'></div>
        <div className='space-y-0'>
          <p>John Doe</p>
          <p className='lg:group-hover:text-purple dark:lg:group-hover:text-violet cursor-pointer transition-all ease-linear duration-150'>@johndoe_20</p>
        </div>
      </div>
      <button className='absolute right-8'>
        <ThemeTogglerSide />
      </button>
    </nav>
  )
}

export default LargeNav