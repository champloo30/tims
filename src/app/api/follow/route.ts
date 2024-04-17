import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'

const handler = async (req: Request) => {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return new NextResponse('Something went wrong', { status: 405 })
  }

  const body = await req.json()
  const { followingUser, followedUser } = body

  const currentUser = await prisma.user.findUnique({
    where: {
      username: followingUser
    }
  })

  const fetchedUser = await prisma.user.findUnique({
    where: {
      username: followedUser
    }
  })
  
  try {
    let currentId = currentUser?.id
    let fetchedId = fetchedUser?.id

    let updateFollowers = [...(fetchedUser?.followers || [])]
    let updateFollowing = [...(currentUser?.following || [])]

    if (req.method === 'POST') {
      updateFollowers.push(currentId!)
      updateFollowing.push(fetchedId!)
    }

    if (req.method === 'DELETE') {
      updateFollowers = updateFollowers.filter(followerId => followerId !== currentId)
      updateFollowing = updateFollowing.filter(followingId => followingId !== fetchedId)
    }

    const updatedFetchedUser = await prisma.user.update({
      where: {
        id: fetchedId
      },
      data: {
        followers: updateFollowers
      }
    })

    const updatedCurrentUser = await prisma.user.update({
      where: {
        id: currentId
      },
      data: {
        following: updateFollowing
      }
    })

    return NextResponse.json(updatedFetchedUser && updatedCurrentUser)
  } catch (error) {
    console.log(error);
    return new NextResponse('Something went wrong', { status: 405 })
  }
}

export { handler as POST, handler as DELETE }