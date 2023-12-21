import React from 'react'

const Close = (props: any) => {
  return (
    <svg className='h-7 w-7 stroke-dark-armor dark:stroke-old-lace cursor-pointer' viewBox="-0.5 0 25 25" onClick={() => props.setOpenMenu(false)}>
      <path d="M3 21.32L21 3.32001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 3.32001L21 21.32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Close