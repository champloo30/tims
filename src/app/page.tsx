'use client'

import MyHome from "@/components/homepage/myHome";
import LargeNav from "@/components/nav/largeNav";
import MobileNav from "@/components/nav/mobileNav";
import { ThemeProvider } from 'next-themes';

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="relative flex">
        <LargeNav />
        <MobileNav />
        <MyHome />
      </main>
    </ThemeProvider>
  )
}
