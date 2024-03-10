import { NextResponse } from "next/server";

import prisma from '@/libs/prismadb'
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export async function POST(req: Request) {

  const currentUser = await getCurrentUser()

  const user = await prisma.user.findUnique({
    where: {
      id: currentUser?.id
    }
  })

  const body = await req.json()
  const { title, content, anonymous, draft } = body

  const createPost = await prisma.post.create({
    data: {
      title, content, anonymous, draft, user: { connect: { id: user?.id } }
    }
  })

  return NextResponse.json(createPost)

  // try {
  //   const currentUser = await getCurrentUser()

  //   const body = await req.json()
  //   const { title, content, anonymous } = body

  //   const createPost = await prisma.post.create({
  //     data: {
  //       user: {
  //         connect: {
  //           email: currentUser?.email
  //         }
  //       }, title, content, anonymous
  //     }
  //   })

  //   return NextResponse.json(createPost)
  // } catch (error) {
  //   console.log(error);
  //   return new NextResponse('Something went wrong', { status: 405 })
  // }
}