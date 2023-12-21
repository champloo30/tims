import { NextResponse } from 'next/server'

import bcrypt from 'bcrypt'
import prisma from '@/libs/prismadb'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, username, email, password, confirmPass } = body

  if (!name || !username || !email || !password || !confirmPass) {
    return new NextResponse('Missing fields', { status: 400 })
  }

  const exsistEmail = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (exsistEmail) {
    throw new Error('Email already exsists')
  }

  const exsistUsername = await prisma.user.findUnique({
    where: {
      username
    }
  })

  if (exsistUsername) {
    throw new Error('Username already exsists')
  }

  if (password !== confirmPass) {
    throw new Error('Passwords do not match')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: { name, username, email, hashedPassword }
  })

  return NextResponse.json(user)
}