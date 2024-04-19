'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Post, User } from '@prisma/client'

import Bio from '@/components/profilepage/bio'
import Button from '../ui/button'
import { AddCircle } from '@mui/icons-material'
import GetPost from '../ui/getPost'
import Modal from '../ui/modal'

interface MyProfileProps {
  currentUser: User
  posts: Post[]
  anonPosts: Post[]
  savedPosts: Post[]
  user: User | null
  params: string
  allUsers: User[]
}

const MyProfile:React.FC<MyProfileProps> = ({ currentUser, posts, anonPosts, savedPosts, user, params, allUsers }) => {
  const [active, setActive] = useState({
    allPost: true,
    anonPost: false,
    savedPost: false
  })
  const [openModal, setOpenModal] = useState(false)

  const router = useRouter()

  const postJson = JSON.parse(JSON.stringify(posts))
  const anonJson = JSON.parse(JSON.stringify(anonPosts))
  const savedJson = JSON.parse(JSON.stringify(savedPosts))

  useEffect(() => {
    if (!currentUser) {
      router.push('/login')
      router.refresh()
    }
  }, [currentUser, router])

  function filter() {
    if (active.allPost) {
      return postJson
    }

    if (active.anonPost) {
      return anonJson
    }

    if (active.savedPost) {
      return savedJson
    }
  }

  return (
    <section className='relative h-screen xl:w-[75vw] top-14 xl:top-0 xl:left-[25vw] bg-old-lace dark:bg-raisin' aria-label='My Profile'>
      <div className='relative h-full w-full'>
        {currentUser && 
          <Bio currentUser={currentUser} posts={posts} anonPosts={anonPosts} user={user} params={params} />
        }
        {/* filtering system */}
        <div className='h-16 w-full flex justify-center items-center bg-purple dark:bg-violet text-old-lace'>
        <ul className='flex justify-center items-center gap-6 sm:gap-8 lg:gap-16 text-sm sm:text-lg md:text-xl'>
          <li className='group flex flex-col items-center hover:scale-125 cursor-pointer transition-all duration-200' onClick={() => setActive({allPost: true, anonPost: false, savedPost: false})}>
            <p>All Posts</p>
            <div className={active.allPost ? 'h-px w-8 bg-old-lace' : 'hidden h-px w-8 bg-old-lace group-hover:block'}></div>
          </li>
          <li className='group flex flex-col items-center hover:scale-125 cursor-pointer transition-all duration-200' onClick={() => setActive({allPost: false, anonPost: true, savedPost: false})}>
            <p>Anonymous Posts</p>
            <div className={active.anonPost ? 'h-px w-8 bg-old-lace' : 'hidden h-px w-8 bg-old-lace group-hover:block'}></div>
          </li>
          <li className='group flex flex-col items-center hover:scale-125 cursor-pointer transition-all duration-200' onClick={() => setActive({allPost: false, anonPost: false, savedPost: true})}>
            <p>Saved Posts</p>
            <div className={active.savedPost ? 'h-px w-8 bg-old-lace' : 'hidden h-px w-8 bg-old-lace group-hover:block'}></div>
          </li>
        </ul>
        </div>
        {
          // no posts rendered
          filter().length == 0 ? 
          <div className='w-full py-16 flex flex-col justify-center items-center gap-4'>
            <h1 className='text-3xl'>No Posts Available</h1>
            {currentUser?.id === user?.id && 
            <Button large onClick={() => setOpenModal(true)}>
              <p className='text-old-lace'> Create Post</p>
              <AddCircle className='fill-old-lace' fontSize='large' />
            </Button>
            }
          </div> :
          // rendered posts
          filter().map((post: any) => {

            {const createdDate = new Date(post.createdAt)
              const updatedDate = new Date(post.updatedAt)
              
              // find user by created posts
              const postCreator = allUsers.find((user) => user.id === post.userId)
              
              return (
                <GetPost 
                  key={post.id}
                  id={post.id} 
                  name={postCreator?.name}
                  user={postCreator?.username}
                  img={postCreator?.image}
                  anon={post.anonymous} 
                  title={post.title} 
                  content={post.content} 
                  createdAt={createdDate}
                  updatedAt={updatedDate}
                  likingUsers={post.likingUsers}
                  savingUsers={post.savingUsers}
                  currentUser={currentUser}
                  posts={postJson}
                />
              )
            }
          })
        }
        {/* open add post modal */}
        {openModal && <div className='absolute lg:top-0 lg:left-[-25vw]'><Modal currentUser={currentUser} modal='post' setOpenModal={setOpenModal} /></div>}
      </div>
    </section>
  )
}

export default MyProfile