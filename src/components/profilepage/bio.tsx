'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Post, User } from '@prisma/client'
import axios from 'axios'
import toast from 'react-hot-toast'

import FollowNums from './followNums'
import PostNums from './postNums'

import Button from '@/components/ui/button'
import FollowForm, { FollowData } from '@/components/ui/form/followForm'
import Modal from '@/components/ui/modal'

import WebLink from '@/components/icons/link'
import ShareSocial from '@/components/icons/shareSocial'
import Instagram from '@/components/icons/socialMedia/instagram'
import YouTube from '@/components/icons/socialMedia/youTube'
import LinkedIn from '@/components/icons/socialMedia/linkedIn'
import TikTok from '@/components/icons/socialMedia/tiktok'
import Twitter from '@/components/icons/socialMedia/twitter'

import { FacebookRounded } from '@mui/icons-material'

interface BioProps {
  currentUser: User
  posts: Post[]
  anonPosts: Post[]
  user: User | null
  params: string
}

const Bio:React.FC<BioProps> = ({ currentUser, posts, anonPosts, user }) => {
  const [openModal, setOpenModal] = useState(false)

  const router = useRouter()
  const userJson = JSON.parse(JSON.stringify(user))
  
  async function submit(formData: FollowData) {
    const followingUser = formData.followingUser
    const followedUser = formData.followedUser

    try {
      if (user?.followers.includes(currentUser.id)) {
        axios.delete('/api/follow', { data: { followingUser, followedUser } }).then(() => {
          toast.success(`Unfollowed @${userJson.username}`)
          router.refresh()
        })
      } else {
        axios.post('/api/follow', formData).then(() => {
          toast.success(`Following @${userJson.username}`)
          router.refresh()
        })
      }
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  const noFacebook = !userJson.facebook || userJson.facebook === ''
  const noInstagram = !userJson.instagram || userJson.instagram === ''
  const noLinkedIn = !userJson.linkedin || userJson.linkedin === ''
  const noTikTok = !userJson.tiktok || userJson.tiktok === ''
  const noTwitter = !userJson.twitter || userJson.twitter === ''
  const noYouTube = !userJson.youtube || userJson.youtube === ''

  return (
    <>
      <div className='h-fit xl:h-64 w-full py-6 xl:py-0 flex xl:justify-center items-center bg-old-lace dark:bg-raisin'>
        <div className='w-full px-8 flex justify-between items-start'>
          <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[40rem] px-4 xl:px-0 flex flex-col xl:flex-row justify-center xl:justify-start items-start gap-2 xl:gap-8'>
            <div className='flex justify-center items-center'>
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
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col xl:gap-2'>
                <p className='text-2xl xl:text-3xl'>{userJson.name}</p>
                <p className='text-sm text-purple dark:text-violet'>@{userJson.username}</p>
              </div>
              <ul className='flex gap-4'>
                <PostNums posts={posts} anonPosts={anonPosts} />
                <FollowNums user={user} />
              </ul>
              <p className='text-sm'>{userJson.bio}</p>
              <div className='flex gap-4'>
                {userJson.website && 
                  <div className='flex gap-2'>
                    <WebLink />
                    <a href={`https://${userJson.website}`} target="_blank" rel="noopener noreferrer" title={`Link to ${userJson.website}`}>{userJson.website}</a>
                  </div>
                }
                {!noFacebook || !noInstagram || !noLinkedIn || !noTikTok || !noTwitter || !noYouTube ?
                  <div className='flex items-center gap-2'>
                    <ShareSocial />
                    <ul className='flex items-center gap-2'>
                      {userJson.facebook && 
                        <li><a href={userJson.facebook} target="_blank" rel="noopener noreferrer" title={`Link to ${userJson.name}'s Facebook`}><FacebookRounded /></a></li>
                      }
                      {userJson.instagram && 
                        <li><a href={userJson.instagram} target="_blank" rel="noopener noreferrer" title={`Link to ${userJson.name}'s Instagram`}><Instagram /></a></li>
                      }
                      {userJson.linkedin && 
                        <li><a href={userJson.linkedin} target="_blank" rel="noopener noreferrer" title={`Link to ${userJson.name}'s LinkedIn`}><LinkedIn /></a></li>
                      }
                      {userJson.tiktok && 
                        <li><a href={userJson.tiktok} target="_blank" rel="noopener noreferrer" title={`Link to ${userJson.name}'s TikTok`}><TikTok /></a></li>
                      }
                      {userJson.twitter && 
                        <li><a href={userJson.twitter} target="_blank" rel="noopener noreferrer" title={`Link to ${userJson.name}'s X (Twitter)`}><Twitter /></a></li>
                      }
                      {userJson.youtube && 
                        <li><a href={userJson.youtube} target="_blank" rel="noopener noreferrer" title={`Link to ${userJson.name}'s YouTube`}><YouTube /></a></li>
                      }
                    </ul>
                  </div> : null
                }
              </div>
            </div>
          </div>
          {user?.email === currentUser?.email ?
            (
              <Button title='Edit Profile' onClick={() => setOpenModal(true)}>Edit Profile</Button>
            ) :
            (
              <FollowForm currentUser={currentUser} user={user} onSubmit={submit} />
            )
          }
        </div>
      </div>
      {openModal && <div className='absolute lg:top-0 lg:left-[-25vw]'><Modal currentUser={currentUser} modal='edit-profile' setOpenModal={setOpenModal} /></div>}
    </>
  )
}

export default Bio