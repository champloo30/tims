

import React from 'react'
import LoadPosts from '@/components/homepage/loadPosts'
import GetPost from '@/components/ui/post'
import { Post, User } from '@prisma/client'
import axios from 'axios'
// import { getPosts } from '../../../actions/getPosts'

interface MyHomeProps {
  currentUser: User | null
}

const MyHome:React.FC<MyHomeProps> = ({ currentUser }) => {
  // const posts = JSON.parse(JSON.stringify(allPosts))

  // console.log(posts);

  return (
    <section className='relative h-full w-full xl:w-[80vw] top-14 xl:top-0 xl:left-[20vw] lg:flex flex-col bg-old-lace' aria-label='my home'>
      <LoadPosts />
      {/* {posts !== null && posts.map((post: any) => {
        <div>{post}</div>
      })} */}
      {/* {postJson.map((post: any) => {
        return (
          <GetPost 
            key={post.userId} 
            anon={post.anonymous} 
            title={post.title} 
            content={post.title} 
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
            liked={post.liked.length}
          />
        )
      })} */}
    </section>
  )
}

export default MyHome