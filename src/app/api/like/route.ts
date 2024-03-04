import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'

const handler = async (req: Request) => {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return new NextResponse('Something went wrong', { status: 405 })
  }

  const body = await req.json()
  const { likingUser, likedPost } = body

  const currentUser = await prisma.user.findUnique({
    where: {
      username: likingUser
    }
  })

  const post = await prisma.post.findUnique({
    where: {
      id: likedPost
    }
  })
  
  try {
    let currentId = currentUser?.id
    let postId = post?.id

    let updateLikers = [...(post?.likingUsers || [])]
    let updateLikedPosts = [...(currentUser?.likedPosts || [])]

    if (req.method === 'POST') {
      updateLikers.push(currentId!)
      updateLikedPosts.push(postId!)
    }

    if (req.method === 'DELETE') {
      updateLikers = updateLikers.filter(likerId => likerId !== currentId)
      updateLikedPosts = updateLikedPosts.filter(likedPostId => likedPostId !== postId)
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: postId
      },
      data: {
        likingUsers: updateLikers
      }
    })

    const updatedCurrentUser = await prisma.user.update({
      where: {
        id: currentId
      },
      data: {
        following: updateLikedPosts
      }
    })

    return NextResponse.json(updatedPost && updatedCurrentUser)
  } catch (error) {
    console.log(error);
    return new NextResponse('Something went wrong', { status: 405 })
  }
}

export { handler as POST, handler as DELETE }