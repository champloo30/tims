'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

import { User } from '@prisma/client'

import Button from '@/components/ui/button'

import Settings from '@/components/icons/settings'
import Close from '@/components/icons/close'
import Plus from '@/components/icons/plus'
import ThemeTogglerSide from '@/components/icons/themeTogglerSide'
import Image from 'next/image'
import Home from '../icons/home'
import Profile from '../icons/profile'
import Logout from '../icons/logout'
import Login from '../icons/login'

interface MobileNavProps {
  currentUser: User | null
}

const MobileNav:React.FC<MobileNavProps> = ({ currentUser }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const { status } = useSession()
  const router = useRouter()
  const json = JSON.parse(JSON.stringify(currentUser))

  return (
    <section className='relative xl:hidden' aria-label='navigation'>
      <nav className='fixed h-14 w-screen z-10 px-6 flex justify-between items-center bg-old-lace dark:bg-raisin drop-shadow-lg'>
        <button className='h-10 w-10 bg-purple dark:bg-violet rounded-full' title='Menu' onClick={() => setOpenMenu(true)} aria-label='Open Menu'>
          {currentUser?.image && 
            <Image 
              className='h-full w-full rounded-full'
              src={currentUser?.image}
              alt={currentUser?.name}
              height={100}
              width={100}
            />
          }
        </button>
        <Link href="/"><h1 className='text-3xl text-old-lace uppercase' title='T.I.M.S.' aria-label='T.I.M.S. Home'>t.i.m.s.</h1></Link>
        <Link href={status === 'authenticated' ? `/${currentUser?.username}/settings` : '/login'} title='My Settings'>
          <Settings />
        </Link>
      </nav>
      <aside className={openMenu ? `fixed h-screen w-screen z-20 bg-purple/50 transition-all duration-300` : `fixed h-screen w-screen -z-20 opacity-100 transition-all duration-300`} aria-label='Side Menu'>
        <div className={openMenu ? `h-screen w-5/6 sm:w-3/5 md:w-2/5 bg-old-lace dark:bg-raisin translate-x-0 transition-all duration-300` : `h-screen w-5/6 sm:w-3/5 md:w-2/5 bg-old-lace dark:bg-raisin -translate-x-full transition-all duration-300`}>
          <div className='h-14 w-full px-6 flex justify-between items-center'>
            <Link className='h-10 w-10 bg-purple dark:bg-violet rounded-full' href={status === 'authenticated' ? `/${currentUser?.username}` : '/login'} title='My Profile'>
              {currentUser?.image && 
                <Image 
                  className='h-full w-full rounded-full'
                  src={currentUser?.image}
                  alt={status === 'authenticated' ? currentUser?.name : ''}
                  height={100}
                  width={100}
                />
              }
            </Link>
            <Close setOpenMenu={setOpenMenu} />
          </div>
          <div className='px-6 space-y-8'>
            {status === 'authenticated' &&
              <div className='space-y-2'>
                <div>
                  <p className='text-lg sm:text-2xl'>{currentUser?.name}</p>
                  <p className='text-sm sm:text-base'>@{currentUser?.username}</p>
                </div>
                <div className='flex gap-4 sm:text-lg'>
                  <p>74 <span className='text-purple dark:text-violet'>Followers</span></p>
                  <p>85 <span className='text-purple dark:text-violet'>Following</span></p>
                </div>
              </div>
            }
            <ul className='mt-8 flex flex-col gap-8 text-2xl sm:text-3xl'>
              <Link className='group -ml-0.5 flex justify-start items-start gap-1.5' href="/">
                <Home />
                <li className='text-2xl capitalize lg:group-hover:text-purple dark:lg:group-hover:text-violet transition-all duration-150' title='My Home'>my home</li>
              </Link>
              <Link className='group flex justify-start items-start gap-2' href={status === 'authenticated' ? `/${json.username}` : '/login'}>
                <Profile />
                <li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Profile'>my profile</li>
              </Link>
              <Link className='group -ml-0.5 flex justify-start items-start gap-1.5' href={status === 'authenticated' ? `/${json.username}/settings` : '/login'}>
                <Settings />
                <li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Settings'>my settings</li>
              </Link>
              <li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='Boundless Courage Home'>boundless courage</li>
              <li className='group flex justify-start items-start gap-2' title={status === 'authenticated' ? 'Log Out' : 'Log In'} onClick={() => status === 'authenticated' ? signOut() : router.push('/login')}>
                {status === 'authenticated' ? <Logout /> : <Login />}
                <p className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150 cursor-pointer'>{status === 'authenticated' ? 'log out' : 'log in'}</p>
              </li>
              <li>
                <Button fullWidth large>
                  <p className='text-old-lace'>Post</p>
                  <Plus />
                </Button>
              </li>
            </ul>
          </div>
          <div className='absolute right-6 bottom-8'>
            <ThemeTogglerSide />
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MobileNav