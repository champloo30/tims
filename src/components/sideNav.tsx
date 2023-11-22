import Link from 'next/link'
import React from 'react'

const SideNav = () => {
  return (
    <nav className='fixed h-screen w-[20vw] z-20 p-8 flex flex-col justify-between bg-old-lace border-r-4 border-purple-dark'>
      <div className='space-y-8'>
        <Link href="/"><h1 className='text-5xl text-purple uppercase' title='T.I.M.S.' aria-label='T.I.M.S. Home'>t.i.m.s.</h1></Link>
        <ul className='flex flex-col gap-4'>
          <Link href="/"><li className='text-2xl capitalize lg:hover:text-purple transition-all duration-150' title='My Home'>my home</li></Link>
          <li className='text-2xl capitalize lg:hover:text-purple transition-all duration-150' title='My Post'>my posts</li>
          <li className='text-2xl capitalize lg:hover:text-purple transition-all duration-150' title='My Settings'>my settings</li>
          <li className='text-2xl capitalize lg:hover:text-purple transition-all duration-150' title='Boundless Courage Home'>boundless courage</li>
          <li>
            <button className='h-12 w-48 flex justify-center items-center gap-2 rounded-md bg-purple lg:hover:scale-105 transition ease-in duration-300' type='button'>
              <p className='text-2xl text-old-lace'>Post</p>
              <svg className='h-8 w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#FFFAFA" stroke-width="1.5"/>
                <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#FFFAFA" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div className='flex gap-2'>
        <div className='h-12 w-12 bg-purple rounded-full'></div>
        <div className='space-y-0'>
          <p>John Doe</p>
          <p className='lg:hover:text-purple lg:hover:underline cursor-pointer transition-all ease-linear duration-150'>@johndoe_20</p>
        </div>
      </div>
    </nav>
  )
}

export default SideNav