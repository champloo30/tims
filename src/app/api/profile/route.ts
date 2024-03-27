import { NextResponse } from 'next/server'

import prisma from '@/libs/prismadb'
import { getCurrentUser } from '../../../../actions/getCurrentUser'

export async function POST(req: Request) {
  const currentUser = await getCurrentUser()
  const body = await req.json()
  const { name, username, bio, website, facebook, instagram, linkedin, tiktok, twitter, youtube } = body

  const updateProfile = await prisma.user.update({
    where: {
      id: currentUser?.id
    },
    data: {
      name,
      username,
      bio,
      website,
      facebook,
      instagram,
      linkedin,
      tiktok,
      twitter,
      youtube
    }
  })

  return NextResponse.json(updateProfile)
}