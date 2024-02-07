import { NextResponse } from 'next/server'

import prisma from '@/libs/prismadb'

export default async function getUser(param: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: param
      }
    })

    if (!user) {
      return null
    }
    
    return {...user, user: user.id}
  } catch (error: any) {
    console.log(error);
    return null
  }
}
