import { NextResponse } from "next/server";
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export default async function handler(req: Request) {
  if (req.method !== 'GET') {
    return new NextResponse('Not a GET request', { status: 405 })
  }

  try {
    const currentUser = await getCurrentUser()
    
    return NextResponse.json(currentUser)
  } catch (error) {
    console.log(error);
    return new NextResponse('Something went wrong', { status: 400 })
  }
}