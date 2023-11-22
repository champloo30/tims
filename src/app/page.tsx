import MyHome from "@/components/homepage/myHome";
import SideNav from "@/components/sideNav";

export default function Home() {
  return (
    <>
      <header className="relative">
      </header>
      <main className="relative flex">
        <SideNav />
        <MyHome />
      </main>
    </>
  )
}
