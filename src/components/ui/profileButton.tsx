import { User } from '@prisma/client'
import React, { useState } from 'react'

interface ProfileButtonProps {
  children: React.ReactNode
  title?: string,
  onClick?: () => void,
  user?: User | null
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ children, title, onClick, user }) => {
  return (
    <>
      <button className='py-2 px-4 border-2 border-purple dark:border-violet rounded-lg text-xl text-purple dark:text-old-lace hover:bg-purple/30 hover:text-old-lace dark:hover:bg-violet/30 dark:hover:text-old-lace transition-all duration-200' title={title} onClick={onClick}>{children}</button>
    </>
    
  )
}

export default ProfileButton