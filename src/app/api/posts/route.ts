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
  const { userId, title, content, anonymous, draft } = body

  const createPost = await prisma.post.create({
    data: {
      userId, title, content, anonymous, draft, user: { connect: { id: user?.id } }
    }
  })

  return NextResponse.json(createPost)
}