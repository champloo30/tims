import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'

const handler = async (req: Request) => {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return new NextResponse('Something went wrong', { status: 405 })
  }

  const body = await req.json()
  const { savingUser, savedPost } = body

  const currentUser = await prisma.user.findUnique({
    where: {
      id: savingUser
    }
  })

  const fetchedPost = await prisma.post.findUnique({
    where: {
      id: savedPost
    }
  })
  
  try {
    let currentId = currentUser?.id
    let postId = fetchedPost?.id

    let updateSavers = [...(fetchedPost?.savingUsers || [])]
    let updateSavedPosts = [...(currentUser?.savedPosts || [])]

    if (req.method === 'POST') {
      updateSavers.push(currentId!)
      updateSavedPosts.push(postId!)
    }

    if (req.method === 'DELETE') {
      updateSavers = updateSavers.filter(saverId => saverId !== currentId)
      updateSavedPosts = updateSavedPosts.filter(savedPostId => savedPostId !== postId)
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: postId
      },
      data: {
        savingUsers: updateSavers
      }
    })

    const updatedCurrentUser = await prisma.user.update({
      where: {
        id: currentId
      },
      data: {
        savedPosts: updateSavedPosts
      }
    })

    return NextResponse.json(updatedPost && updatedCurrentUser)
  } catch (error) {
    console.log(error);
    return new NextResponse('Something went wrong', { status: 405 })
  }
}

export { handler as POST, handler as DELETE }