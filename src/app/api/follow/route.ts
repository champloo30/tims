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
  

  // try {
  //   const currentUser = await getCurrentUser()
  //   const fetchedUser = await getUser(params.username)
  //   const userId = fetchedUser?.id

  //   if (!userId || typeof userId !== 'string') {
  //     throw new Error('Invalid ID')
  //   }

  //   const user = await prisma.user.findUnique({
  //     where: {
  //       id: userId
  //     }
  //   })

  //   if (!user) {
  //     throw new Error('Invalid ID')
  //   }

  //   let updatedFollowingIds = [...(user.followingIds || [])]

  //   if (req.method === 'POST') {
  //     updatedFollowingIds.push(userId)
  //   }

  //   if (req.method === 'DELETE') {
  //     updatedFollowingIds = updatedFollowingIds.filter(followingId => followingId !== userId)
  //   }

  //   const updatedUser = prisma.user.update({
  //     where: {
  //       id: currentUser?.id
  //     },
  //     data: {
  //       followingIds: updatedFollowingIds
  //     }
  //   })

  //   return NextResponse.json(updatedUser)
  // } catch (error) {
  //   console.log(error);
  //   return new NextResponse('Something went wrong', { status: 405 })
  // }
}

export { handler as POST, handler as DELETE }