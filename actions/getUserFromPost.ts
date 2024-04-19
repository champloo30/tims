import { NextResponse } from "next/server";

import prisma from '@/libs/prismadb'

export async function getUserFromPost(id: string) {

  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: id
      }
    })

    if (!getUser) {
      return null
    }

    return {...getUser, id: getUser.id}
  } catch (error: any) {
    console.log(error);
    return new NextResponse('Something went wrong', { status: 405 })
  }
}

