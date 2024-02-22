'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

import { signOut, useSession } from 'next-auth/react'

import { User } from '@prisma/client'
import { AddCircle, Home, Login, Logout, Person, Settings, SportsMma } from '@mui/icons-material'

import Button from '@/components/ui/button'
import ThemeTogglerSide from '@/components/nav/themeTogglerSide'
import Modal from '../ui/modal'

interface DesktopNavProps {
  currentUser: User | null
}

export const DesktopNav:React.FC<DesktopNavProps> = ({ currentUser }) => {
  const [active, setActive] = useState({
    home: false,
    profile: false,
    settings: false
  })
  const [openModal, setOpenModal] = useState(false)

  const { status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  const json = JSON.parse(JSON.stringify(currentUser))

  useEffect(() => {
    pathname === '/' && setActive({ home: true, profile: false, settings: false })
    pathname === `/${json.username}` && setActive({ home: false, profile: true, settings: false })
    pathname === `/${json.username}/settings` && setActive({ home: false, profile: false, settings: true })
  }, [json.username, pathname])

  return (
    <nav className='fixed h-screen w-[25vw] z-20 p-6 hidden xl:flex flex-col justify-between bg-old-lace dark:bg-raisin border-r-4 border-purple-dark dark:border-old-lace'>
      <div className='space-y-4'>
        <Link href="/"><h1 className='text-5xl text-purple dark:text-violet uppercase' title='T.I.M.S.' aria-label='T.I.M.S. Home'>t.i.m.s.</h1></Link>
        <ul className='flex flex-col gap-1.5'>
          <Link className='group relative px-4 py-2 flex justify-start items-end gap-1.5 hover:bg-fade hover:dark:bg-fade-dark rounded-lg transition duration-300' href="/">
            <div className={`absolute group-hover:h-full ${active.home ? 'h-full' : 'group-hover:animate-lineDown'} w-1.5 left-0 bottom-0 bg-purple dark:bg-violet rounded-l-lg`}></div>
            <Home className='fill-purple dark:fill-old-lace' fontSize='large' />
            <li className='text-xl capitalize lg:group-hover:text-purple dark:lg:group-hover:text-violet transition-all duration-300' title='My Home'>my home</li>
          </Link>
          <Link className='group relative px-4 py-2 flex justify-start items-end gap-1.5 hover:bg-fade hover:dark:bg-fade-dark rounded-lg transition-all duration-300' href={status === 'authenticated' ? `/${json.username}` : '/login'}>
          <div className={`absolute group-hover:h-full ${active.profile ? 'h-full' : 'group-hover:animate-lineDown'} w-1.5 left-0 bottom-0 bg-purple dark:bg-violet rounded-l-lg`}></div>
            <Person className='fill-purple dark:fill-old-lace' fontSize='large' />
            <li className='text-xl capitalize lg:group-hover:text-purple dark:lg:group-hover:text-violet transition-all duration-300' title='My Profile'>my profile</li>
          </Link>
          <Link className='group relative px-4 py-2 flex justify-start items-end gap-1.5 hover:bg-fade hover:dark:bg-fade-dark rounded-lg transition-all duration-300' href={status === 'authenticated' ? `/${json.username}/settings` : '/login'}>
          <div className={`absolute group-hover:h-full ${active.settings ? 'h-full' : 'group-hover:animate-lineDown'} w-1.5 left-0 bottom-0 bg-purple dark:bg-violet rounded-l-lg`}></div>
            <Settings className='fill-purple dark:fill-old-lace' fontSize='large' />
            <li className='text-xl capitalize lg:group-hover:text-purple dark:lg:group-hover:text-violet transition-all duration-300' title='My Settings'>my settings</li>
          </Link>
          <div className='group relative px-4 py-2 flex justify-start items-end gap-1.5 hover:bg-fade hover:dark:bg-fade-dark rounded-lg transition-all duration-300'>
            <div className='absolute group-hover:h-full w-1.5 left-0 bottom-0 bg-purple dark:bg-violet rounded-l-lg group-hover:animate-lineDown'></div>
            <SportsMma className='fill-purple dark:fill-old-lace' fontSize='large' />
            <li className='text-xl capitalize lg:group-hover:text-purple dark:lg:group-hover:text-violet transition-all duration-300' title='Boundless Courage Home'>boundless courage</li>
          </div>
          <li className='group relative px-4 py-2 flex justify-start items-end gap-1.5 hover:bg-fade hover:dark:bg-fade-dark rounded-lg transition-all duration-300 cursor-pointer' title={status === 'authenticated' ? 'Log Out' : 'Log In'} onClick={() => status === 'authenticated' ? signOut() : router.push('/login')}>
            <div className='absolute group-hover:h-full w-1.5 left-0 bottom-0 bg-purple dark:bg-violet rounded-l-lg group-hover:animate-lineDown'></div>
            {status === 'authenticated' ? <Logout className='fill-purple dark:fill-old-lace' fontSize='large' /> : <Login className='fill-purple dark:fill-old-lace' fontSize='large' />}
            <p className='text-xl capitalize lg:group-hover:text-purple dark:lg:group-hover:text-violet transition-all duration-300'>{status === 'authenticated' ? 'log out' : 'log in'}</p>
          </li>
          <li>
            <Button fullWidth large onClick={() => setOpenModal(true)}>
              <p className='text-old-lace'>Post</p>
              <AddCircle className='fill-old-lace' fontSize='large' />
            </Button>
          </li>
        </ul>
      </div>
      <div className='space-y-1'>
        {status === 'authenticated' && 
          <div className='space-y-2'>
            <ThemeTogglerSide />
            <Link className='group px-4 py-4 flex flex-col gap-2 hover:bg-fade dark:hover:bg-fade-dark rounded-lg cursor-pointer transition ease-linear duration-300' href={`/${json.username}`} title='My Profile'>
              <div className='flex gap-2 ease-in-out duration-300'>
                <div className='h-12 w-12 bg-purple dark:bg-violet rounded-full'>
                  {json.image && 
                    <Image 
                      className='h-full w-full rounded-full'
                      src={json.image}
                      alt={json.name}
                      height={100}
                      width={100}
                    />
                  }
                </div>
                <div className='space-y-0'>
                  <p>{json.name}</p>
                  <p className='lg:group-hover:text-purple dark:lg:group-hover:text-violet cursor-pointer transition-all ease-linear duration-300'>@{json.username}</p>
                </div>
              </div>
            </Link>
          </div>
        }
      </div>
      {openModal && <Modal currentUser={currentUser} modal='post' setOpenModal={setOpenModal} />}
    </nav>
  )
}

export default DesktopNav
