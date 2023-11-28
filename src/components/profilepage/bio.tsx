import React from 'react'
import WebLink from '@/components/icons/link'
import ShareSocial from '@/components/icons/shareSocial'
import Facebook from '@/components/icons/socialMedia/facebook'
import Instagram from '@/components/icons/socialMedia/instagram'
import YouTube from '@/components/icons/socialMedia/youTube'

const Bio = () => {
  return (
    <div className='h-64 w-[80vw] flex justify-center items-center bg-old-lace dark:bg-raisin'>
      <div className='w-[40rem] flex justify-center items-start gap-8'>
        <div className='h-36 w-36 p-[4.5rem] bg-purple dark:bg-violet rounded-full'></div>
        <div className='flex flex-col gap-1.5'>
          <p className='text-3xl'>John Doe</p>
          <p className='text-sm text-purple dark:text-old-lace'>@johndoe_20</p>
          <ul className='flex gap-4'>
            <li>100 <span className='text-purple dark:text-violet'>Posts</span></li>
            <li>12 <span className='text-purple dark:text-violet'>Anonymous Posts</span></li>
            <li>74 <span className='text-purple dark:text-violet'>Followers</span></li>
            <li>85 <span className='text-purple dark:text-violet'>Following</span></li>
          </ul>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit.</p>
          <div className='flex gap-4'>
            <div className='flex gap-2'>
              <WebLink />
              <p className='lg:hover:text-purple lg:hover:underline transition-all ease-in duration-150'>johndoe.com</p>
            </div>
            <div className='flex gap-2'>
              <ShareSocial />
              <ul className='flex gap-2'>
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