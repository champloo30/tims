'use client'

import Button from '@/components/ui/button'
import { Info, InfoOutlined } from '@mui/icons-material'
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

  // invalid states
  const [invalidUsername, setInvalidUsername] = useState(false)
  const [invalidFacebook, setInvalidFacebook] = useState(false)
  const [invalidInstagram, setInvalidInstagram] = useState(false)
  const [invalidLinkedIn, setInvalidLinkedIn] = useState(false)
  const [invalidTikTok, setInvalidTikTok] = useState(false)
  const [invalidTwitter, setInvalidTwitter] = useState(false)
  const [invalidYouTube, setInvalidYouTube] = useState(false)

  const [showInfoUsername, setShowInfoUsername] = useState(false)
  const [showInfoSocials, setShowInfoSocials] = useState(false)

  // username state checks
  const [usernameRegexCheck, setUsernameRegexCheck] = useState(false)
  const [minValCheck, setMinValCheck] = useState(false)
  const [maxValCheck, setMaxValCheck] = useState(false)

  // socials state regex checks
  const [facebookRegexCheck, setFacebookRegexCheck] = useState(false)
  const [instagramRegexCheck, setInstagramRegexCheck] = useState(false)
  const [linkedinRegexCheck, setLinkedInRegexCheck] = useState(false)
  const [tiktokRegexCheck, setTiktokRegexCheck] = useState(false)
  const [twitterRegexCheck, setTwitterRegexCheck] = useState(false)
  const [youtubeRegexCheck, setYoutubeRegexCheck] = useState(false)

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

  // username checks
  const usernameRegex = /^[a-z0-9_\.]+$/
  const minValue = 6
  const maxValue = 30
  const usernameSuccess = 'Username is valid'
  const usernameError = 'Username is invalid'

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const regexMatch = usernameRegex.test(value)

    // regex check
    if (regexMatch === true) {
      setUsernameRegexCheck(true)
    } else {
      setUsernameRegexCheck(false)
    }

    // min value check
    if (minValue <= value.length) {
      setMinValCheck(true)
    } else {
      setMinValCheck(false)
    }
    
    // max value check
    if (maxValue >= value.length) {
      setMaxValCheck(true)
    } else {
      setMaxValCheck(false)
    }

    if (usernameRegexCheck && minValCheck && maxValCheck) {
      setInvalidUsername(false)
      setFormData({ ...formData, [name]: value })
    } else if (!usernameRegexCheck || !minValCheck || !maxValCheck) {
      setInvalidUsername(true)
    }
  }

  // social handlers

  //facebook checks
  const facebookRegex = /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/

  function handleFacebook() {
    setChecked({...checked, facebook: !checked.facebook})

    if (checked.facebook === false) {
      setInvalidFacebook(false)
    }
  }

  function handleFacebookChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const regexMatch = facebookRegex.test(value)

    // regex check
    if (regexMatch === true) {
      setFacebookRegexCheck(true)
    } else {
      setFacebookRegexCheck(false)
    }

    if (facebookRegexCheck) {
      setInvalidFacebook(false)
      setFormData({ ...formData, [name]: value })
    } else if (!facebookRegexCheck || value === '') {
      setInvalidFacebook(true)
    }
  }

  //instagram checks
  const instagramRegex = /(?:https?:)?\/\/(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/

  function handleInstagram() {
    setChecked({...checked, instagram: !checked.instagram})

    if (checked.instagram === false) {
      setInvalidInstagram(false)
    }
  }

  function handleInstagramChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const regexMatch = instagramRegex.test(value)

    // regex check
    if (regexMatch === true) {
      setInstagramRegexCheck(true)
    } else {
      setInstagramRegexCheck(false)
    }

    if (instagramRegexCheck) {
      setInvalidInstagram(false)
      setFormData({ ...formData, [name]: value })
    } else if (!instagramRegexCheck || value === '') {
      setInvalidInstagram(true)
    }
  }

  // linkedin checks
  const linkedinRegex = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile|school|company|groups|showcase)\/([-a-zA-Z0-9]+)\/*/

  function handleLinkedIn() {
    setChecked({...checked, linkedin: !checked.linkedin})

    if (checked.linkedin === false) {
      setInvalidLinkedIn(false)
    }
  }

  function handleLinkedInChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const regexMatch = linkedinRegex.test(value)

    // regex check
    if (regexMatch === true) {
      setLinkedInRegexCheck(true)
    } else {
      setLinkedInRegexCheck(false)
    }

    if (linkedinRegexCheck) {
      setInvalidLinkedIn(false)
      setFormData({ ...formData, [name]: value })
    } else if (!linkedinRegexCheck || value === '') {
      setInvalidLinkedIn(true)
    }
  }

  //tiktok checks
  const tiktokRegex = /^(?:(?:https?:\/\/)?(?:www\.)?tiktok\.com\/)?@([\w.]{0,23}\w)(?:\/\S*)?$/
  
  function handleTikTok() {
    setChecked({...checked, tiktok: !checked.tiktok})

    if (checked.tiktok === false) {
      setInvalidTikTok(false)
    }
  }

  function handleTikTokChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const regexMatch = tiktokRegex.test(value)

    // regex check
    if (regexMatch === true) {
      setTiktokRegexCheck(true)
    } else {
      setTiktokRegexCheck(false)
    }

    if (tiktokRegexCheck) {
      setInvalidTikTok(false)
      setFormData({ ...formData, [name]: value })
    } else if (!tiktokRegexCheck || value === '') {
      setInvalidTikTok(true)
    }
  }

  // twitter checks
  const twitterRegex = /^(?:https?:)?\/\/?(?:www\.)?twitter\.com\/@?([A-Za-z0-9_]+)\/?/

  function handleTwitter() {
    setChecked({...checked, twitter: !checked.twitter})

    if (checked.twitter === false) {
      setInvalidTwitter(false)
    }
  }

  function handleTwitterChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const regexMatch = twitterRegex.test(value)

    // regex check
    if (regexMatch === true) {
      setTwitterRegexCheck(true)
    } else {
      setTwitterRegexCheck(false)
    }

    if (twitterRegexCheck) {
      setInvalidTwitter(false)
      setFormData({ ...formData, [name]: value })
    } else if (!twitterRegexCheck || value === '') {
      setInvalidTwitter(true)
    }
  }

  // youtube checks
  const youtubeRegex = /(?:https?:)?\/\/(?:[A-z]+\.)?youtube.com\/(user|channel)\/([A-z0-9-\_]+)\/?/

  function handleYouTube() {
    setChecked({...checked, youtube: !checked.youtube})

    if (checked.youtube === false) {
      setInvalidYouTube(false)
    }
  }

  function handleYouTubeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const regexMatch = youtubeRegex.test(value)

    // regex check
    if (regexMatch === true) {
      setYoutubeRegexCheck(true)
    } else {
      setYoutubeRegexCheck(false)
    }

    if (youtubeRegexCheck) {
      setInvalidYouTube(false)
      setFormData({ ...formData, [name]: value })
    } else if (!youtubeRegexCheck || value === '') {
      setInvalidYouTube(true)
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
        {/* name */}
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
        {/* username */}
        <div className='flex flex-col gap-1'>
          <label className={`${invalidUsername && 'text-danger dark:text-danger-dark'}`} htmlFor="username">Username <button type="button" onClick={() => setShowInfoUsername(!showInfoUsername)}><InfoOutlined sx={{ height: '16px' }} /></button></label>
          {showInfoUsername && 
            <div className='text-sm text-dark-armor/50 dark:text-old-lace/50'>
              <p className={`font-bold ${invalidUsername === true ? 'text-danger dark:text-danger-dark' : 'text-green-700 dark:text-green-500'}`}>Username:</p>
              <ul>
                <li className={`${!usernameRegexCheck ? 'text-danger dark:text-danger-dark' : 'text-green-700 dark:text-green-500'}`}>&#x2022; must be a combination of:
                  <ul className='ml-4'>
                    <li>- lowercase letters ( a-z )</li>
                    <li>- numbers ( 0-9 )</li>
                    <li>- underscores ( _ ) and/or periods ( . )</li>
                  </ul>
                </li>
                <li className={`${!minValCheck ? 'text-danger dark:text-danger-dark' : 'text-green-700 dark:text-green-500'}`}>&#x2022; have minimum characters of 6</li>
                <li className={`${!maxValCheck ? 'text-danger dark:text-danger-dark' : 'text-green-700 dark:text-green-500'}`}>&#x2022; have maximum character of 30</li>
              </ul>
            </div>
          }
          <input 
            className={`px-2 py-1 bg-fade dark:bg-fade-dark ${invalidUsername && 'border border-danger dark:border-danger-dark'}`}
            type="text" 
            id='username'
            name="username" 
            defaultValue={json.username}
            placeholder='yourusername_24'
            onChange={handleUsernameChange}
          />
          {invalidUsername ? <span className='text-sm text-danger dark:text-danger-dark'>{usernameError}</span> : <span className='text-sm text-green-700 dark:text-green-500'>{usernameSuccess}</span>}
        </div>
        {/* bio */}
        <div className='flex flex-col gap-1'>
          <label htmlFor="bio">Bio</label>
          <textarea className='px-2 py-1 bg-fade dark:bg-fade-dark' name="bio" defaultValue={json.bio} maxLength={250} onChange={handleTextAreaChange}></textarea>
          <span className='text-dark-armor/30 dark:text-old-lace/30'>{formData.bio?.length}/250</span>
        </div>
        {/* website */}
        <div className='flex flex-col gap-1'>
          <label htmlFor="website">Website</label>
          <input 
            className='px-2 py-1 bg-fade dark:bg-fade-dark'
            type="text" 
            name="website"
            defaultValue={json.website}
            placeholder='boundlesscourage.org'
            onChange={handleInputChange} 
          />
        </div>
        {/* socials */}
        <div className='w-full space-y-2'>
          <p>Socials <button type="button" onClick={() => setShowInfoSocials(!showInfoSocials)}><InfoOutlined sx={{ height: '16px' }} /></button></p>
          {showInfoSocials && <span className='text-sm text-dark-armor/50 dark:text-old-lace/50'>Must include full link of social media profile</span>}
          {/* facebook */}
          <div className='w-full flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="facebook-checkbox" 
              onChange={handleFacebook}
            />
            <label className={`${checked.facebook && invalidFacebook && 'text-danger dark:text-danger-dark'}`} htmlFor="facebook-checkbox">Facebook</label>
            {checked.facebook && <input className={`w-1/2 px-2 py-1 ${invalidFacebook && 'border border-danger dark:border-danger-dark'}`} name='facebook' defaultValue={json.facebook} placeholder='https://www.facebook.com/your_username' onChange={handleFacebookChange} />}
          </div>
          {/* instagram */}
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="instagram-checkbox" 
              onChange={handleInstagram}
            />
            <label className={`${checked.instagram && invalidInstagram && 'text-danger dark:text-danger-dark'}`} htmlFor="instagram-checkbox">Instagram</label>
            {checked.instagram && <input className={`w-1/2 px-2 py-1 ${invalidInstagram && 'border border-danger dark:border-danger-dark'}`} name='instagram' defaultValue={json.instagram} placeholder='https://www.instagram.com/your_username' onChange={handleInstagramChange} />}
          </div>
          {/* linkedin */}
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="linkedin-checkbox" 
              checked={checked.linkedin}
              onChange={handleLinkedIn}
            />
            <label className={`${checked.linkedin && invalidLinkedIn && 'text-danger dark:text-danger-dark'}`} htmlFor="linkedin-checkbox">LinkedIn</label>
            {checked.linkedin && <input className={`w-1/2 px-2 py-1 ${invalidLinkedIn && 'border border-danger dark:border-danger-dark'}`} name='linkedin' defaultValue={json.linkedin} placeholder='https://www.linkedin.com/your_username' onChange={handleLinkedInChange} />}
          </div>
          {/* tiktok */}
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="tiktok-checkbox" 
              onChange={handleTikTok}
            />
            <label className={`${checked.tiktok && invalidTikTok && 'text-danger dark:text-danger-dark'}`} htmlFor="tiktok-checkbox">TikTok</label>
            {checked.tiktok && <input className={`w-1/2 px-2 py-1 ${invalidTikTok && 'border border-danger dark:border-danger-dark'}`} name='tiktok' defaultValue={json.tiktok} placeholder='https://www.tiktok.com/@your_username' onChange={handleTikTokChange} />}
          </div>
          {/* twiiter */}
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="twitter-checkbox" 
              onChange={handleTwitter}
            />
            <label className={`${checked.twitter && invalidTwitter && 'text-danger dark:text-danger-dark'}`} htmlFor="twitter-checkbox">X (formerly Twitter)</label>
            {checked.twitter && <input className={`w-1/2 px-2 py-1 ${invalidTwitter && 'border border-danger dark:border-danger-dark'}`} name='twitter' defaultValue={json.twitter} placeholder='https://www.twitter.com/your_username' onChange={handleTwitterChange} />}
          </div>
          {/* youtube */}
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="youtube-checkbox" 
              onChange={handleYouTube}
            />
            <label className={`${checked.youtube && invalidYouTube && 'text-danger dark:text-danger-dark'}`} htmlFor="youtube-checkbox">YouTube</label>
            {checked.youtube && <input className={`w-1/2 px-2 py-1 ${invalidYouTube && 'border border-danger dark:border-danger-dark'}`} name='youtube' defaultValue={json.youtube} placeholder='https://www.youtube.com/your_username' onChange={handleYouTubeChange} />}
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