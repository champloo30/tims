import React from 'react'

const Post = () => {
  return (
    <div className='h-64 w-full flex justify-center items-center px-32 gap-8 bg-old-lace border-b-4 border-purple-dark'>
      <div className='flex justify-center items-start gap-8'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='h-24 w-24 bg-purple rounded-full'></div>
          <p className='lg:hover:text-purple lg:hover:underline cursor-pointer transition-all ease-linear duration-150' title='View User Page'>@johndoe_20</p>
        </div>
        <div className='flex flex-col gap-6'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus gravida quis blandit turpis. Molestie nunc non blandit massa enim nec dui nunc mattis. Scelerisque fermentum dui faucibus in ornare quam viverra. Pharetra et ultrices neque ornare aenean.</p>
          <div className='flex justify-start items-center gap-2'>
            <form action="" method="post">
              <input className='h-10 w-[30rem] px-2 flex bg-old-lace border-2 border-purple rounded-full placeholder:text-dark-armor' type="text" name="comment" id="comment" placeholder='Comment...' />
            </form>
            <div className='cursor-pointer' title='View Comments'>
              <svg className='h-8 w-8' viewBox="0 0 32 32" version="1.1">
                <g id="Page-1" stroke="none" stroke-width="0" fill="none" fill-rule="evenodd">
                  <g id="Icon-Set" transform="translate(-100.000000, -255.000000)" className='fill-purple'>
                    <path d="M116,281 C114.832,281 113.704,280.864 112.62,280.633 L107.912,283.463 L107.975,278.824 C104.366,276.654 102,273.066 102,269 C102,262.373 108.268,257 116,257 C123.732,257 130,262.373 130,269 C130,275.628 123.732,281 116,281 L116,281 Z M116,255 C107.164,255 100,261.269 100,269 C100,273.419 102.345,277.354 106,279.919 L106,287 L113.009,282.747 C113.979,282.907 114.977,283 116,283 C124.836,283 132,276.732 132,269 C132,261.269 124.836,255 116,255 L116,255 Z" id="comment-1"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className='cursor-pointer' title='Like Post'>
              <svg className='h-10 w-10 stroke-purple stroke-[1.25px] hover:fill-purple transition-all ease duration-300' viewBox="0 0 24 24" fill="none">
                <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post