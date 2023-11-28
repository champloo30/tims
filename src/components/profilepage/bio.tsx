import React from 'react'
import WebLink from '@/components/icons/link'
import ShareSocial from '@/components/icons/shareSocial'
import Facebook from '@/components/icons/socialMedia/facebook'
import Instagram from '@/components/icons/socialMedia/instagram'
import YouTube from '@/components/icons/socialMedia/youTube'

const Bio = () => {
  return (
    <div className='h-fit xl:h-64 w-full py-6 xl:py-0 flex justify-center items-center bg-old-lace dark:bg-raisin'>
      <div className='xl:w-[40rem] px-4 xl:px-0 flex flex-col xl:flex-row justify-center items-start gap-2 xl:gap-8'>
        <div className='h-24 xl:h-36 w-24 xl:w-36 xl:p-[4.5rem] bg-purple dark:bg-violet rounded-full'></div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col xl:gap-2'>
            <p className='text-2xl xl:text-3xl'>John Doe</p>
            <p className='text-sm text-purple dark:text-violet'>@johndoe_20</p>
          </div>
          <ul className='flex gap-4'>
            <li className='flex flex-col xl:flex-row justify-start items-start xl:gap-1'>
              <span>100</span>
              <span className='text-purple dark:text-violet'>Posts</span>
            </li>
            <li className='flex flex-col xl:flex-row justify-start items-start xl:gap-1'>
              <span>12</span>
              <span className='text-purple dark:text-violet'>Anon Posts</span>
            </li>
            <li className='flex flex-col xl:flex-row justify-start items-start xl:gap-1'>
              <span>74</span>
              <span className='text-purple dark:text-violet'>Followers</span>
            </li>
            <li className='flex flex-col xl:flex-row justify-start items-start xl:gap-1'>
              <span>85</span>
              <span className='text-purple dark:text-violet'>Following</span>
            </li>
          </ul>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit.</p>
          <div className='flex gap-4'>
            <div className='flex gap-2'>
              <WebLink />
              <p className='lg:hover:text-purple lg:hover:underline transition-all ease-in duration-150'>johndoe.com</p>
            </div>
            <div className='flex gap-2'>
              <ShareSocial />
              <ul className='flex items-center gap-2'>
                <li><Facebook /></li>
                <li><Instagram /></li>
                <li><YouTube /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio