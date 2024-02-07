// import { NextApiRequest } from "next";
// import { NextRequest, NextResponse } from "next/server";

// import prisma from '@/libs/prismadb'

// export async function GET(req: NextRequest, {params}: {params: {username: string}}) {
//   if (req.method !== 'GET') {
//     return new NextResponse('Not a GET request', { status: 405 })
//   }

//   try {
//     const username = params.username
    

//     if (!username || typeof username !== 'string') {
//       throw new Error('Invalid Username')
//     }

//     const user = await prisma.user.findUnique({
//       where: {
//         username: username
//       }
//     })

//     const followersCount = await prisma.user.count({
//       where: {
//         followingIds: {
//           has: user?.id
//         }
//       }
//     })

//     return NextResponse.json({ ...user, followersCount })
//   } catch (error) {
//     console.log(error);
//     return new NextResponse('Something went wrong', { status: 400 })
//   }
// }