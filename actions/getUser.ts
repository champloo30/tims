import { NextResponse } from 'next/server'

import prisma from '@/libs/prismadb'

export default async function getUser(param: string) {
  const user = await prisma.user.findUnique({
    where: {
      username: param
    }
  })

  if (!user) {
    return null
  }
  
  return {...user, user: user.id}
}
