import React from 'react'
import LoadPosts from '@/components/homepage/loadPosts'
import GetPost from '@/components/ui/getPost'
import { Post, User } from '@prisma/client'
import axios from 'axios'
import { PostProps } from './main'
// import { getPosts } from '../../../actions/getPosts'

interface MyHomeProps {
  currentUser: User | null
  posts: Post[]
}

const MyHome:React.FC<MyHomeProps> = ({ currentUser, posts }) => {
  const postJson = JSON.parse(JSON.stringify(posts))

  return (
    <section className='relative h-full w-full xl:w-[80vw] top-14 xl:top-0 xl:left-[20vw] lg:flex flex-col bg-old-lace' aria-label='my home'>
      <LoadPosts />
      {postJson.map((post: any) => {
        {const createdDate = new Date(post.createdAt)
          const updatedDate = new Date(post.updatedAt)
          
          return (
            <GetPost 
              id={post.id} 
              user={post.userId}
              anon={post.anonymous} 
              title={post.title} 
              content={post.content} 
              createdAt={createdDate}
              updatedAt={updatedDate}
              likingUsers={post.likingUsers.length}
              currentUser={currentUser}
              posts={postJson}
            />
          )
        }
      })}
    </section>
  )
}

export default MyHome