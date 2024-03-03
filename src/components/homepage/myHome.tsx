

import React from 'react'
import LoadPosts from '@/components/homepage/loadPosts'
import GetPost from '@/components/ui/getPost'
import { Post, User } from '@prisma/client'
import axios from 'axios'
import { PostProps } from './main'
// import { getPosts } from '../../../actions/getPosts'

interface MyHomeProps {
  currentUser: User | null
  user: User | null
  posts: Post[]
}

const MyHome:React.FC<MyHomeProps> = ({ currentUser, posts, user }) => {
  const postJson = JSON.parse(JSON.stringify(posts))

  // console.log(posts);

  return (
    <section className='relative h-full w-full xl:w-[80vw] top-14 xl:top-0 xl:left-[20vw] lg:flex flex-col bg-old-lace' aria-label='my home'>
      <LoadPosts />
      {/* <GetPost edit={false} anon={false} />
      <GetPost edit={false} anon={true} />
      <GetPost edit={false} anon={false} />
      <GetPost edit={false} anon={true} /> */}
      {/* {posts !== null && posts.map((post: any) => {
        <div>{post}</div>
      })} */}
      {postJson.map((post: any) => {
        return (
          <GetPost 
            key={post.id} 
            user={post.userId}
            anon={post.anonymous} 
            title={post.title} 
            content={post.content} 
            updatedAt={post.updatedAt}
            liker={post.liker.length}
          />
        )
      })}
    </section>
  )
}

export default MyHome