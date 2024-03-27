'use client'

import Button from '@/components/ui/button'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface EditProfileFormProps {
  currentUser: User | null
  setOpenModal: Dispatch<SetStateAction<boolean>>
  onSubmit: (data: ProfileData) => void
  isLoading: boolean
}

export interface ProfileData {
  name?: string | null,
  username?: string | null,
  bio?: string | null,
  website?: string | null,
  facebook?: string | null,
  instagram?: string | null,
  linkedin?: string | null,
  tiktok?: string | null,
  twitter?: string | null,
  youtube?: string | null
}

const EditProfileForm:React.FC<EditProfileFormProps> = ({ currentUser, setOpenModal, onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<ProfileData>({
    name: currentUser?.name,
    username: currentUser?.username,
    bio: currentUser?.bio,
    website: currentUser?.website,
    facebook: currentUser?.facebook,
    instagram: currentUser?.instagram,
    linkedin: currentUser?.linkedin,
    tiktok: currentUser?.tiktok,
    twitter: currentUser?.twitter,
    youtube: currentUser?.youtube,
  })

  const [checked, setChecked] = useState({
    facebook: currentUser?.facebook === '' ? false : true,
    instagram: currentUser?.instagram === '' ? false : true,
    linkedin: currentUser?.linkedin === '' ? false : true,
    tiktok: currentUser?.tiktok === '' ? false : true,
    twitter: currentUser?.twitter === '' ? false : true,
    youtube: currentUser?.youtube === '' ? false : true
  })

  const [invalidUsername, setInvalidUsername] = useState(false)
  const [invalidFacebook, setInvalidFacebook] = useState(false)
  const [invalidInstagram, setInvalidInstagram] = useState(false)
  const [invalidLinkedIn, setInvalidLinkedIn] = useState(false)
  const [invalidTikTok, setInvalidTikTok] = useState(false)
  const [invalidTwitter, setInvalidTwitter] = useState(false)
  const [invalidYouTube, setInvalidYouTube] = useState(false)

  const router = useRouter()

  const json = JSON.parse(JSON.stringify(currentUser))

  // text handlers
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // social handlers
  function handleFacebook() {
    setChecked({...checked, facebook: !checked.facebook})

    if (checked.facebook === false) {
      setInvalidFacebook(false)
    }
  }

  function handleInstagram() {
    setChecked({...checked, instagram: !checked.instagram})

    if (checked.instagram === false) {
      setInvalidInstagram(false)
    }
  }

  function handleLinkedIn() {
    setChecked({...checked, linkedin: !checked.linkedin})

    if (checked.linkedin === false) {
      setInvalidLinkedIn(false)
    }
  }
  
  function handleTikTok() {
    setChecked({...checked, tiktok: !checked.tiktok})

    if (checked.tiktok === false) {
      setInvalidTikTok(false)
    }
  }

  function handleTwitter() {
    setChecked({...checked, twitter: !checked.twitter})

    if (checked.twitter === false) {
      setInvalidTwitter(false)
    }
  }

  function handleYouTube() {
    setChecked({...checked, youtube: !checked.youtube})

    if (checked.youtube === false) {
      setInvalidYouTube(false)
    }
  }

  // submit
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // username check
    if (formData.username === '') {
      setInvalidUsername(true)
    }

    // facebook check
    if (checked.facebook && formData.facebook === '') {
      setInvalidFacebook(true)
    }

    // instagram check
    if (checked.instagram && formData.instagram === '') {
      setInvalidInstagram(true)
    }

    // linkedin check
    if (checked.linkedin && formData.linkedin === '') {
      setInvalidLinkedIn(true)
    }

    // tiktok check
    if (checked.tiktok && formData.tiktok === '') {
      setInvalidTikTok(true)
    }
    
    // twitter check
    if (checked.twitter && formData.twitter === '') {
      setInvalidTwitter(true)
    }
    
    // youtube check
    if (checked.youtube && formData.youtube === '') {
      setInvalidYouTube(true)
    }
    

    if (invalidUsername === false && invalidFacebook === false && invalidInstagram === false && invalidLinkedIn === false && invalidTikTok === false && invalidTwitter === false && invalidYouTube === false) {
      onSubmit(formData)
    }
  }

  return (
    <div className='h-full w-full p-8 flex flex-col gap-4 overflow-hidden bg-old-lace dark:bg-raisin'>
      <h1 className='px-2 text-2xl text-purple dark:text-old-lace'>Edit Profile</h1>
      <form className='w-full px-2 space-y-4 overflow-scroll' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name">Name</label>
          <input 
            className='px-2 py-1 bg-fade dark:bg-fade-dark'
            type="text" 
            name="name" 
            defaultValue={json.name}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className={`${invalidUsername && 'text-danger dark:text-danger-dark'}`} htmlFor="username">Username</label>
          <input 
            className={`px-2 py-1 bg-fade dark:bg-fade-dark ${invalidUsername && 'border border-danger dark:border-danger-dark'}`}
            type="text" 
            name="username" 
            defaultValue={json.username}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="bio">Bio</label>
          <textarea className='px-2 py-1 bg-fade dark:bg-fade-dark' name="bio" defaultValue={json.bio} maxLength={250} onChange={handleTextAreaChange}></textarea>
          <span className='text-dark-armor/30 dark:text-old-lace/30'>{formData.bio?.length}/250</span>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="website">Website</label>
          <input 
            className='px-2 py-1 bg-fade dark:bg-fade-dark'
            type="text" 
            name="website"
            defaultValue={json.website}
            onChange={handleInputChange} 
          />
        </div>
        <div className='w-full space-y-2'>
          <p>Socials:</p>
          <div className='w-full flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="facebook-checkbox" 
              onChange={handleFacebook}
            />
            <label htmlFor="facebook-checkbox">Facebook</label>
            {checked.facebook && <input className='w-1/2 px-2 py-1' name='facebook' defaultValue={json.facebook} placeholder='https://www.facebook.com/your_username' onChange={handleInputChange} />}
          </div>
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="instagram-checkbox" 
              onChange={handleInstagram}
            />
            <label htmlFor="instagram-checkbox">Instagram</label>
            {checked.instagram && <input className='w-1/2 px-2 py-1' name='instagram' defaultValue={json.instagram} placeholder='https://www.instagram.com/your_username' onChange={handleInputChange} />}
          </div>
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="linkedin-checkbox" 
              checked={checked.linkedin}
              onChange={handleLinkedIn}
            />
            <label htmlFor="linkedin-checkbox">LinkedIn</label>
            {checked.linkedin && <input className='w-1/2 px-2 py-1' name='linkedin' defaultValue={json.linkedin} placeholder='https://www.linkedin.com/your_username' onChange={handleInputChange} />}
          </div>
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="tiktok-checkbox" 
              onChange={handleTikTok}
            />
            <label htmlFor="tiktok-checkbox">TikTok</label>
            {checked.tiktok && <input className='w-1/2 px-2 py-1' name='tiktok' defaultValue={json.tiktok} placeholder='https://www.tiktok.com/your_username' onChange={handleInputChange} />}
          </div>
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="twitter-checkbox" 
              onChange={handleTwitter}
            />
            <label htmlFor="twitter-checkbox">X (formerly Twitter)</label>
            {checked.twitter && <input className='w-1/2 px-2 py-1' name='twitter' defaultValue={json.twitter} placeholder='https://www.twitter.com/your_username' onChange={handleInputChange} />}
          </div>
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="youtube-checkbox" 
              onChange={handleYouTube}
            />
            <label htmlFor="youtube-checkbox">YouTube</label>
            {checked.youtube && <input className='w-1/2 px-2 py-1' name='youtube' defaultValue={json.youtube} placeholder='https://www.youtube.com/your_username' onChange={handleInputChange} />}
          </div>
        </div>
        <div className='flex gap-4'>
          <Button type='submit'>Submit</Button>
          <Button type='button' onClick={() => setOpenModal(false)}>Cancel</Button>
        </div>
      </form>
    </div>
  )
}

export default EditProfileForm