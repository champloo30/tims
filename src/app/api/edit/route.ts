import { NextResponse } from "next/server";

import prisma from '@/libs/prismadb'
import { getCurrentUser } from "../../../../actions/getCurrentUser";


export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser()

    const body = await req.json()
    const { name, username, bio, website, socials } = body

    if (!name || !username) {
      throw new Error('Missing fields')
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser?.id
      },
      data: { name, username, bio, website, socials }
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.log(error);
    return null
  }
}