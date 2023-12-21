import { NextResponse } from 'next/server'

import prisma from '@/libs/prismadb'

export default async function getProfile(param: string) {
  const user = await prisma.user.findUnique({
    where: {
      username: param
    }
  })

  const profile = await prisma.profile.findUnique({
    where: {
      userId: user?.id
    }
  })

  return {...profile, id: profile?.userId.toString() || null}
}