'use client'

import React from 'react'

import { Profile, User } from '@prisma/client'

import Button from '@/components/ui/button'

import WebLink from '@/components/icons/link'
import ShareSocial from '@/components/icons/shareSocial'
import Facebook from '@/components/icons/socialMedia/facebook'
import Instagram from '@/components/icons/socialMedia/instagram'
import YouTube from '@/components/icons/socialMedia/youTube'
import Link from 'next/link'
import LinkedIn from '../icons/socialMedia/linkedIn'
import TikTok from '../icons/socialMedia/tiktok'
import Twitter from '../icons/socialMedia/twitter'
import Image from 'next/image'

interface BioProps {
  currentUser: User | null
  user: User | null
  profile: Profile | null
}

const Bio:React.FC<BioProps> = ({ currentUser, user, profile }) => {
  const userJson = JSON.parse(JSON.stringify(user))
  const proJson = JSON.parse(JSON.stringify(profile))

  return (
    <div className='h-fit xl:h-64 w-full py-6 xl:py-0 flex xl:justify-center items-center bg-old-lace dark:bg-raisin'>
      <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[40rem] px-4 xl:px-0 flex flex-col xl:flex-row justify-center items-start gap-2 xl:gap-8'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <div className='h-24 xl:h-36 w-24 xl:w-36 bg-purple dark:bg-violet rounded-full'>
            {userJson.image && 
              <Image 
              className='h-full w-full rounded-full'
                src={userJson.image}
                alt={userJson.name}
                height={500}
                width={500}
              />
            }
          </div>
          {user?.email !== currentUser?.email &&
            <button className='h-12 w-24 xl:w-36 border-2 border-purple dark:border-violet rounded-lg text-xl text-purple dark:text-old-lace hover:bg-purple hover:text-old-lace dark:hover:bg-violet dark:hover:text-old-lace transition-all duration-200' title={`Follow ${userJson.username}`}>Follow</button>
          }
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col xl:gap-2'>
            <p className='text-2xl xl:text-3xl'>{userJson.name}</p>
            <p className='text-sm text-purple dark:text-violet'>@{userJson.username}</p>
          </div>
          <ul className='flex gap-4'>
            <li className='flex flex-col sm:flex-row justify-start items-start sm:gap-1'>
              <span>100</span>
              <span className='text-purple dark:text-violet'>Posts</span>
            </li>
            <li className='flex flex-col sm:flex-row justify-start items-start sm:gap-1'>
              <span>12</span>
              <span className='text-purple dark:text-violet'>Anon Posts</span>
            </li>
            <li className='flex flex-col sm:flex-row justify-start items-start sm:gap-1'>
              <span>74</span>
              <span className='text-purple dark:text-violet'>Followers</span>
            </li>
            <li className='flex flex-col sm:flex-row justify-start items-start sm:gap-1'>
              <span>85</span>
              <span className='text-purple dark:text-violet'>Following</span>
            </li>
          </ul>
          <p className='text-sm'>{proJson.bio}</p>
          <div className='flex gap-4'>
            {proJson.website && 
              <div className='flex gap-2'>
                <WebLink />
                <a className='lg:hover:text-purple dark:lg:hover:text-violet lg:hover:underline transition-all ease-in duration-150' href={`https://${proJson.website}`} target="_blank" rel="noopener noreferrer">{proJson.website}</a>
              </div>
            }
            {proJson.facebook || proJson.instagram || proJson.linkedIn || proJson.tiktok || proJson.twitter || proJson.youtube &&
              <div className='flex gap-2'>
                <ShareSocial />
                <ul className='flex items-center gap-2'>
                  {proJson.facebook && 
                    <li><a href={proJson.facebook} target="_blank" rel="noopener noreferrer"><Facebook /></a></li>
                  }
                  {proJson.instagram && 
                    <li><a href={proJson.instagram} target="_blank" rel="noopener noreferrer"><Instagram /></a></li>
                  }
                  {proJson.linkedin && 
                    <li><a href={proJson.linkedin} target="_blank" rel="noopener noreferrer"><LinkedIn /></a></li>
                  }
                  {proJson.tiktok && 
                    <li><a href={proJson.tiktok} target="_blank" rel="noopener noreferrer"><TikTok /></a></li>
                  }
                  {proJson.twitter && 
                    <li><a href={proJson.twitter} target="_blank" rel="noopener noreferrer"><Twitter /></a></li>
                  }
                  {proJson.youtube && 
                    <li><a href={proJson.youtube} target="_blank" rel="noopener noreferrer"><YouTube /></a></li>
                  }
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
      {user?.email === currentUser?.email && 
        <Link className='absolute w-36 top-6 right-4 xl:right-8' href={`/${userJson.username}/edit-profile`}>
          <Button type='button'>Edit Profile</Button>
        </Link>
      }
    </div>
  )
}

export default Bio