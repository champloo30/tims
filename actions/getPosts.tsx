import { NextResponse } from "next/server";

import prisma from '@/libs/prismadb'
import { GetStaticProps } from "next";

// export async function getPosts() {
//   try {
//     const allPosts = await prisma.post.findMany()

//     if (!allPosts) {
//       return null
//     }

//     return {...allPosts }
//   } catch (error: any) {
//     console.log(error);
//     return new NextResponse('Something went wrong', { status: 405 })
//   }
// }

