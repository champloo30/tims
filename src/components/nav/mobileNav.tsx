'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

import { User } from '@prisma/client'
import { AddCircle, Close, Home, Login, Logout, Person, Settings, SportsMma } from '@mui/icons-material'

import FollowNums from '@/components/profilepage/followNums'

import Button from '@/components/ui/button'

import ThemeTogglerSideMobile from '@/components/nav/themeTogglerSide'

interface MobileNavProps {
  currentUser: User | null
}

const MobileNav:React.FC<MobileNavProps> = ({ currentUser }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [active, setActive] = useState({
    home: false,
    profile: false,
    settings: false
  })

  const { status } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  
  const json = JSON.parse(JSON.stringify(currentUser))

  useEffect(() => {
    if (json) {
      pathname === '/' && setActive({ home: true, profile: false, settings: false })
      pathname === `/${json.username}` && setActive({ home: false, profile: true, settings: false })
      pathname === `/${json.username}/settings` && setActive({ home: false, profile: false, settings: true })
    }
  }, [json, pathname])

  return (
    <section className='relative xl:hidden' aria-label='navigation'>
      <nav className='fixed h-14 w-screen z-10 px-6 flex justify-between items-center bg-old-lace dark:bg-raisin drop-shadow-lg'>
        <button className='h-10 w-10 bg-purple dark:bg-violet rounded-full' title='Menu' onClick={() => setOpenMenu(true)} aria-label='Open Menu'>
          {currentUser?.image && 
            <Image 
              className='h-full w-full rounded-full'
              src={currentUser?.image}
              alt={currentUser?.name || 'User'}
              height={100}
              width={100}
            />
          }
        </button>
        <Link href="/"><h1 className='text-3xl text-old-lace uppercase' title='T.I.M.S.' aria-label='T.I.M.S. Home'>t.i.m.s.</h1></Link>
        <Link href={status === 'authenticated' ? `/${currentUser?.username}/settings` : '/login'} title='My Settings'>
          <Settings className='fill-purple dark:fill-old-lace' fontSize='large' />
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
                  alt={status === 'authenticated' && currentUser?.name || 'User'}
                  height={100}
                  width={100}
                />
              }
            </Link>
            <Close className='fill-dark-armor dark:fill-old-lace cursor-pointer' fontSize='large' onClick={() => {setOpenMenu(false)}} />
          </div>
          <div className='px-6 space-y-4'>
            {status === 'authenticated' &&
              <div className='space-y-2'>
                <div>
                  <p className='text-lg sm:text-2xl'>{currentUser?.name}</p>
                  <p className='text-sm sm:text-base'>@{currentUser?.username}</p>
                </div>
                <div className='flex gap-4 sm:text-lg'>
                  <FollowNums user={json} />
                </div>
              </div>
            }
            <ul className='flex flex-col gap-3 text-xl'>
              <Link className='group relative px-3 py-1 flex justify-start items-end gap-1.5' href="/">
                <div className={`absolute group-hover:h-full ${active.home ? 'h-full' : 'group-hover:animate-lineDown'} w-1 left-0 bottom-0 bg-purple dark:bg-violet rounded-l-lg`}></div>
                <Home className='fill-purple dark:fill-old-lace' fontSize='large' />
                <li className='capitalize lg:group-hover:text-purple dark:lg:group-hover:text-violet transition-all duration-150' title='My Home'>my home</li>
              </Link>
              <Link className='group relative px-3 py-1 flex justify-start items-end gap-1.5' href={status === 'authenticated' ? `/${json.username}` : '/login'}>
                <div className={`absolute group-hover:h-full ${active.profile ? 'h-full' : 'group-hover:animate-lineDown'} w-1 left-0 bottom-0 bg-purple dark:bg-violet rounded-l-lg`}></div>
                <Person className='fill-purple dark:fill-old-lace' fontSize='large' />
                <li className='capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Profile'>my profile</li>
              </Link>
              <Link className='group relative px-3 py-1 flex justify-start items-end gap-1.5' href={status === 'authenticated' ? `/${json.username}/settings` : '/login'}>
                <div className={`absolute group-hover:h-full ${active.settings ? 'h-full' : 'group-hover:animate-lineDown'} w-1 left-0 bottom-0 bg-purple dark:bg-violet rounded-l-lg`}></div>
                <Settings className='fill-purple dark:fill-old-lace' fontSize='large' />
                <li className='capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Settings'>my settings</li>
              </Link>
              <Link className='group relative px-3 py-1 flex justify-start items-end gap-1.5' href="/">
                <div className={`absolute group-hover:h-full w-1 left-0 bottom-0 bg-purple dark:bg-violet rounded-l-lg group-hover:animate-lineDown`}></div>
                <SportsMma className='fill-purple dark:fill-old-lace' fontSize='large' />
                <li className='text-xl capitalize lg:group-hover:text-purple dark:lg:group-hover:text-violet transition-all duration-150' title='Boundless Courage Home'>boundless courage</li>
              </Link>
              <li className='group relative px-3 py-1 flex justify-start items-end gap-1.5' title={status === 'authenticated' ? 'Log Out' : 'Log In'} onClick={() => status === 'authenticated' ? signOut() : router.push('/login')}>
                <div className={`absolute group-hover:h-full w-1 left-0 bottom-0 bg-purple dark:bg-violet rounded-l-lg group-hover:animate-lineDown`}></div>
                {status === 'authenticated' ? <Logout className='fill-purple dark:fill-old-lace' fontSize='large' /> : <Login className='fill-purple dark:fill-old-lace' fontSize='large' />}
                <p className='capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150 cursor-pointer'>{status === 'authenticated' ? 'log out' : 'log in'}</p>
              </li>
              <li>
                <Button fullWidth large>
                  <p className='text-old-lace'>Post</p>
                  <AddCircle className='fill-old-lace' fontSize='large' />
                </Button>
              </li>
            </ul>
          </div>
          <div className='w-full mt-8 px-6'>
            <ThemeTogglerSideMobile />
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MobileNav