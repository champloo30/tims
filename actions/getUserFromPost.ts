import { NextResponse } from "next/server";

import prisma from '@/libs/prismadb'
import { getCurrentUser } from "./getCurrentUser";
import getUser from "./getUser";

export async function getUserFromPost(params: string) {
  const user = getUser(params)

  try {
    const getUser = await prisma.user.findUnique({
      where: {
        username: userId
      }
    })

    // const getUser = await prisma.user.findUnique({
    //   where: {
    //     username: params
    //   }
    // })

    if (!getUser) {
      return null
    }

    return {...getUser, name: getUser.name, username: getUser.username}
  } catch (error: any) {
    console.log(error);
    return new NextResponse('Something went wrong', { status: 405 })
  }
}

