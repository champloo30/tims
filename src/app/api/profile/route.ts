import { NextResponse } from 'next/server'

import prisma from '@/libs/prismadb'
import { getCurrentUser } from '../../../../actions/getCurrentUser'

export async function POST(req: Request) {
  const currentUser = await getCurrentUser()
  const body = await req.json()
  const { bio, website, facebook, instagram, linkedin, tiktok, twitter, youtube } = body

  const createProfile = await prisma.profile.create({
    
    data: { 
      user: {
        connect: {
          email: currentUser?.email
        }
      },
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

  return NextResponse.json(createProfile)
}