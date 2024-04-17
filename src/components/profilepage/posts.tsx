'use client'

import React, { useState } from 'react'

import { Post, User } from '@prisma/client'

import { AddCircle } from '@mui/icons-material'

import GetPost from '@/components/ui/getPost'
import Button from '@/components/ui/button'
import Modal from '@/components/ui/modal'

interface PostsProps {
  currentUser: User
  user: User | null
  posts: Post[]
  anonPosts: Post[]
}

const Posts:React.FC<PostsProps> = ({ currentUser, user, posts, anonPosts }) => {
  const [active, setActive] = useState({
    allPost: true,
    anonPost: false
  })
  const [openModal, setOpenModal] = useState(false)

  const postJson = JSON.parse(JSON.stringify(posts))
  const anonJson = JSON.parse(JSON.stringify(anonPosts))

  function filter() {
    if (active.allPost) {
      return postJson
    }

    if (active.anonPost) {
      return anonJson
    }
  }
  
  return (
    <>
      {/* filtering system */}
      <div className='h-16 w-full flex justify-center items-center bg-purple dark:bg-violet text-old-lace'>
        <ul className='flex justify-center items-center gap-6 sm:gap-8 lg:gap-16 text-sm sm:text-lg md:text-xl'>
          <li className='group flex flex-col items-center hover:scale-125 cursor-pointer transition-all duration-200' onClick={() => setActive({allPost: true, anonPost: false})}>
            <p>All Posts</p>
            <div className='hidden h-px w-8 bg-old-lace group-hover:block'></div>
          </li>
          <li className='group flex flex-col items-center hover:scale-125 cursor-pointer transition-all duration-200' onClick={() => setActive({allPost: false, anonPost: true})}>
            <p>Anonymous Posts</p>
            <div className='hidden h-px w-8 bg-old-lace group-hover:block'></div>
          </li>
          <li className='group flex flex-col items-center hover:scale-125 cursor-pointer transition-all duration-200'>
            <p>Saved Posts</p>
            <div className='hidden h-px w-8 bg-old-lace group-hover:block'></div>
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
            
            return (
              <GetPost 
                key={post.id}
                id={post.id} 
                name={post.userId === user?.id ? user?.name : null}
                user={post.userId === user?.id ? user?.username : null}
                anon={post.anonymous} 
                title={post.title} 
                content={post.content} 
                createdAt={createdDate}
                updatedAt={updatedDate}
                likingUsers={post.likingUsers}
                currentUser={currentUser}
                posts={postJson}
              />
            )
          }
        })
      }
      {/* open add post modal */}
      {openModal && <div className='absolute lg:top-0 lg:left-[-25vw]'><Modal currentUser={currentUser} modal='post' setOpenModal={setOpenModal} /></div>}
    </>
  )
}

export default Posts