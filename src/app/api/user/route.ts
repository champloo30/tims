import { NextResponse } from "next/server";

import prisma from '@/libs/prismadb'

export async function GET(req: Request) {
  if (req.method !== 'GET') {
    return new NextResponse('Not a GET request', { status: 405 })
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(users)
  } catch (error) {
    console.log(error);
    return new NextResponse('Something went wrong', { status: 400 })
  }
}