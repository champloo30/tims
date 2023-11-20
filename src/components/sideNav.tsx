import React from 'react'

const SideNav = () => {
  return (
    <nav className='h-screen w-[17.5rem] p-8 flex flex-col justify-between bg-old-lace border-r-4 border-purple-dark'>
      <div className='space-y-8'>
        <h1 className='text-5xl text-purple uppercase'>t.i.m.s.</h1>
        <ul className='flex flex-col gap-4'>
          <li className='text-2xl capitalize'>my home</li>
          <li className='text-2xl capitalize'>my posts</li>
          <li className='text-2xl capitalize'>my settings</li>
          <li className='text-2xl capitalize'>boundless courage</li>
          <li>
            <button className='px-12 py-3 flex gap-2 rounded-md bg-purple hover:scale-95 transition duration-200' type='button'>
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
          <p>@johndoe_20</p>
        </div>
      </div>
    </nav>
  )
}

export default SideNav