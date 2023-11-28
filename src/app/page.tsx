'use client'

import MyHome from "@/components/homepage/myHome";
import SideNav from "@/components/sideNav";
import { ThemeProvider } from 'next-themes';

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <header className="relative">
      </header>
      <main className="relative flex">
        <SideNav />
        <MyHome />
      </main>
    </ThemeProvider>
  )
}
