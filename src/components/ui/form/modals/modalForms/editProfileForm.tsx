'use client'

import Button from '@/components/ui/button'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface EditProfileFormProps {
  currentUser: User | null
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

export interface ProfileData {
  name?: string | null,
  username?: string | null,
  bio?: string | null,
  website?: string | null,
  socials?: {
    facebook?: string | null,
    instagram?: string | null,
    linkedin?: string | null,
    tiktok?: string | null,
    twitter?: string | null,
    youtube?: string | null
  }
}

const EditProfileForm:React.FC<EditProfileFormProps> = ({ currentUser, setOpenModal }) => {
  const [formData, setFormData] = useState<ProfileData>({
    name: '',
    username: '',
    bio: '',
    website: '',
    socials: {
      facebook: '',
      instagram: '',
      linkedin: '',
      tiktok: '',
      twitter: '',
      youtube: '',
    }
  })

  const [checked, setChecked] = useState({
    facebook: false,
    instagram: false,
    linkedin: false,
    tiktok: false,
    twitter: false,
    youtube: false
  })

  const [invalid, setInvalid] = useState(false)

  const router = useRouter()

  const json = JSON.parse(JSON.stringify(currentUser))

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleFacebook() {
    setChecked({...checked, facebook: !checked.facebook})

    if (checked.facebook === false) {
      setInvalid(false)
    }
  }

  return (
    <div className='h-full w-full p-8 flex flex-col gap-4 overflow-hidden bg-old-lace dark:bg-raisin'>
      <h1 className='text-2xl text-purple dark:text-old-lace'>Edit Profile</h1>
      <form className='w-full space-y-4 overflow-scroll'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" onChange={handleTextAreaChange}></textarea>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="website">Website</label>
          <input 
            type="text" 
            name="website"
            onChange={handleInputChange} 
          />
        </div>
        <div className='w-full space-y-2'>
          <p>Socials:</p>
          <div className='w-full flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="facebook" 
              onChange={handleFacebook}
            />
            <label htmlFor="facebook">Facebook</label>
            {checked.facebook && <input className='w-1/2 px-2 py-1' name='facebook-update' placeholder='https://www.facebook.com/(&quot;your username&quot;)' onChange={handleInputChange} />}
          </div>
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="instagram" 
            />
            <label htmlFor="instagram">Instagram</label>
          </div>
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="linkedin" 
            />
            <label htmlFor="linkedin">LinkedIn</label>
          </div>
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="tiktok" 
            />
            <label htmlFor="tiktok">TikTok</label>
          </div>
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="twitter" 
            />
            <label htmlFor="twitter">X (formerly Twitter)</label>
          </div>
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="youtube" 
            />
            <label htmlFor="youtube">YouTube</label>
          </div>
        </div>
      </form>
      <div className='flex gap-4'>
        <Button type='submit'>Submit</Button>
        <Button type='button' onClick={() => setOpenModal(false)}>Cancel</Button>
      </div>
    </div>
  )
}

export default EditProfileForm