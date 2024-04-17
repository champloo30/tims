import React from 'react'
import LoadPosts from '@/components/homepage/loadPosts'
import GetPost from '@/components/ui/getPost'
import { Post, User } from '@prisma/client'

interface MyHomeProps {
  currentUser: User
  posts: Post[]
}

const MyHome:React.FC<MyHomeProps> = async ({ currentUser, posts }) => {
  const postJson = JSON.parse(JSON.stringify(posts))

  return (
    <section className='relative h-full w-full xl:w-[80vw] top-14 xl:top-0 xl:left-[20vw] lg:flex flex-col bg-old-lace' aria-label='my home'>
      <LoadPosts />
      {postJson.map(async (post: any) => {
        const user = await prisma?.user.findUnique({
          where: {
            id: post.userId
          }
        })

        {const createdDate = new Date(post.createdAt)
          const updatedDate = new Date(post.updatedAt)
          
          return (
            <GetPost 
              key={post.id}
              id={post.id} 
              name={user?.name}
              user={user?.username}
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
      })}
    </section>
  )
}

export default MyHome