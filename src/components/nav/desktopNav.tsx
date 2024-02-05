'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { signOut, useSession } from 'next-auth/react'

import { User } from '@prisma/client'

import Button from '@/components/ui/button'

import Plus from '@/components/icons/plus'
import ThemeTogglerSide from '@/components/icons/themeTogglerSide'
import Image from 'next/image'

interface DesktopNavProps {
  currentUser: User | null
}

export const DesktopNav:React.FC<DesktopNavProps> = ({ currentUser }) => {
  const { status } = useSession()
  const router = useRouter()
  const json = JSON.parse(JSON.stringify(currentUser))

  return (
    <nav className='fixed h-screen w-[20vw] z-20 p-8 hidden xl:flex flex-col justify-between bg-old-lace dark:bg-raisin border-r-4 border-purple-dark dark:border-old-lace'>
      <div className='space-y-8'>
        <Link href="/"><h1 className='text-5xl text-purple dark:text-violet uppercase' title='T.I.M.S.' aria-label='T.I.M.S. Home'>t.i.m.s.</h1></Link>
        <ul className='flex flex-col gap-4'>
          <Link href="/"><li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Home'>my home</li></Link>
          <Link href={status === 'authenticated' ? `/${json.username}` : '/login'}><li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Profile'>my profile</li></Link>
          <Link href={status === 'authenticated' ? `/${json.username}/settings` : '/login'}><li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='My Settings'>my settings</li></Link>
          <li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150' title='Boundless Courage Home'>boundless courage</li>
          <li className='text-2xl capitalize lg:hover:text-purple dark:lg:hover:text-violet transition-all duration-150 cursor-pointer' title={status === 'authenticated' ? 'Log Out' : 'Log In'} onClick={() => status === 'authenticated' ? signOut() : router.push('/login')}>{status === 'authenticated' ? 'log out' : 'log in'}</li>
          <li>
            <Button type='button'>
              <p className='text-old-lace'>Post</p>
              <Plus />
            </Button>
          </li>
        </ul>
      </div>
      <div className='space-y-2'>
        {status === 'authenticated' && 
          <Link className='group px-4 py-4 flex gap-2 hover:bg-fade dark:hover:bg-fade-dark rounded-lg cursor-pointer transition-all ease-linear duration-150' href={`/${json.username}`}>
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
              <p className='lg:group-hover:text-purple dark:lg:group-hover:text-violet cursor-pointer transition-all ease-linear duration-150'> CX zx z zdfbfgfs@{json.username}</p>
            </div>
          </Link>
        }
      </div>
      <div className='absolute right-8'>
        <ThemeTogglerSide />
      </div>
    </nav>
  )
}

export default DesktopNav
