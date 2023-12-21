import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'
import { getCurrentUser } from '../../../../actions/getCurrentUser'

export async function POST(req: Request) {
  const currentUser = await getCurrentUser()
  const body = await req.json()
  const { username } = body

  if (!username) {
    return new NextResponse('Missing username', { status: 400 })
  }

  const exsistUsername = await prisma.user.findUnique({
    where: {
      username
    }
  })

  if (exsistUsername) {
    throw new Error('Username already exsists')
  }

  const updatedUsername = await prisma.user.update({
    where: {
      email: currentUser?.email
    },
    data: {
      username
    }
  })

  return NextResponse.json(updatedUsername)
}