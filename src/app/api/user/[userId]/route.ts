import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

import prisma from '@/libs/prismadb'

export async function GET(req: NextApiRequest) {
  if (req.method !== 'GET') {
    return new NextResponse('Not a GET request', { status: 405 })
  }

  try {
    const { userId } = req.query

    if (!userId || typeof userId !== 'string') {
      throw new Error('Invalid ID')
    }

    const user = prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    const proflie = prisma.profile.findUnique({
      where: {
        userId
      }
    })

    return NextResponse.json({user, proflie})
  } catch (error) {
    console.log(error);
    return new NextResponse('Something went wrong', { status: 400 })
  }
}