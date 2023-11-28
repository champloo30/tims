'use client'

import React, { useState } from 'react'
import Settings from '@/components/icons/settings'
import Close from '@/components/icons/close'
import Plus from '@/components/icons/plus'
import Link from 'next/link'
import ThemeTogglerSide from '@/components/ui/themeTogglerSide'

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <section className='relative xl:hidden'>
      <nav className='fixed h-14 w-screen z-10 px-6 flex justify-between items-center bg-old-lace dark:bg-raisin drop-shadow-lg'>
        <button className='h-10 w-10 bg-purple dark:bg-violet rounded-full' onClick={() => setOpenMenu(true)}></button>
        <Link href="/"><h1 className='text-3xl text-old-lace uppercase' title='T.I.M.S.' aria-label='T.I.M.S. Home'>t.i.m.s.</h1></Link>
        <Link href='/user/settings' title='My Settings'>
          <Settings />
        </Link>
      </nav>
      <aside className={openMenu ? `fixed h-screen w-screen z-20 bg-purple/50 transition-all duration-300` : `fixed h-screen w-screen -z-20 opacity-100 transition-all duration-300`}>
        <div className={openMenu ? `relative h-full w-5/6 bg-old-lace dark:bg-raisin translate-x-0 transition-all duration-300` : `h-full w-5/6 bg-old-lace dark:bg-raisin -translate-x-full transition-all duration-300`}>
          <div className='h-14 w-full px-6 flex justify-between items-center'>
            <button className='h-10 w-10 bg-purple dark:bg-violet rounded-full'></button>
            <Close setOpenMenu={setOpenMenu} />
          </div>
          <div className='px-6 space-y-8'>
            <div className='space-y-2'>
              <div>
                <p className='text-lg'>John Doe</p>
                <p className='text-sm'>@johndoe_20</p>
              </div>
              <div className='flex gap-4'>
                <p>74 <span className='text-purple dark:text-violet'>Followers</span></p>
                <p>85 <span className='text-purple dark:text-violet'>Following</span></p>
              </div>
            </div>
            <ul className='flex flex-col gap-8'>
              <Link href="/"><li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Home'>my home</li></Link>
              <Link href='/user'><li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Profile'>my profile</li></Link>
              <Link href='/user/settings'><li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Settings'>my settings</li></Link>
              <li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='Boundless Courage Home'>boundless courage</li>
              <li>
                <button className='h-12 w-48 flex justify-center items-center gap-2 rounded-md bg-purple dark:bg-violet lg:hover:scale-105 transition ease-in duration-300' type='button'>
                  <p className='text-2xl text-old-lace'>Post</p>
                  <Plus />
                </button>
              </li>
            </ul>
          </div>
          <button className='absolute right-6 bottom-8'>
            <ThemeTogglerSide />
          </button>
        </div>
      </aside>
    </section>
  )
}

export default MobileNav