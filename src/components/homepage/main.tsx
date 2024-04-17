// 'use client'

// import React from 'react'

// import { Post, User } from '@prisma/client'

// import MyHome from '@/components/homepage/myHome'
// import DesktopNav from '@/components/nav/desktopNav'
// import MobileNav from '@/components/nav/mobileNav'

// interface MainProps {
//   currentUser: User | null,
//   posts: Post[]
// }

// export interface PostProps {
//   id: string,
//   userId: string,
//   title: string | null,
//   content: string,
//   draft: boolean | null,
//   anonymous: boolean | null,
//   updatedAt: Date,
//   liker: string[] | null,
//   liking: string[] | null
// }

// const Main:React.FC<MainProps> = ({ currentUser, posts }) => {

//   return (
//     <main className="relative flex">
//       <DesktopNav currentUser={currentUser} />
//       <MobileNav currentUser={currentUser} />
//       <MyHome currentUser={currentUser} posts={posts} />
//     </main>
//   )
// }

// export default Main