import React, { useState } from 'react'
import Button from '../button'
import { useRouter } from 'next/navigation'
import { User } from '@prisma/client'

interface ProfileFormProps {
  onSubmit: (data: ProfileData) => void,
  isLoading: boolean,
  currentUser: User | null
}

export interface ProfileData {
  bio: string,
  website: string,
  facebook?: string,
  instagram?: string,
  linkedin?: string,
  tiktok?: string,
  twitter?: string,
  youtube?: string
}

const ProfileForm:React.FC<ProfileFormProps> = ({ onSubmit, isLoading, currentUser }) => {
  const [formData, setFormData] = useState<ProfileData>({
    bio: '',
    website: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    tiktok: '',
    twitter: '',
    youtube: ''
  })
  const [invalid, setInvalid] = useState(false)
  const [checkedFacebook, setCheckedFacebook] = useState(false)
  const [checkedInstagram, setCheckedInstagram] = useState(false)
  const [checkedLinkedIn, setCheckedLinkedIn] = useState(false)
  const [checkedTikTok, setCheckedTikTok] = useState(false)
  const [checkedTwitter, setCheckedTwitter] = useState(false)
  const [checkedYouTube, setCheckedYouTube] = useState(false)
  
  const router = useRouter()
  const json = JSON.parse(JSON.stringify(currentUser))
  const charLimit = {
    bio: 250,
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleFacebook() {
    setCheckedFacebook(!checkedFacebook)

    if (checkedFacebook === false) {
      setInvalid(false)
      setFormData({...formData, facebook: ''})
    }
  }

  function handleInstagram() {
    setCheckedInstagram(!checkedInstagram)

    if (checkedInstagram === false) {
      setInvalid(false)
      setFormData({...formData, instagram: ''})
    }
  }

  function handleLinkedIn() {
    setCheckedLinkedIn(!checkedLinkedIn)

    if (checkedLinkedIn === false) {
      setInvalid(false)
      setFormData({...formData, linkedin: ''})
    }
  }

  function handleTikTok() {
    setCheckedTikTok(!checkedTikTok)

    if (checkedTikTok === false) {
      setInvalid(false)
      setFormData({...formData, tiktok: ''})
    }
  }

  function handleTwitter() {
    setCheckedTwitter(!checkedTwitter)

    if (checkedTwitter === false) {
      setInvalid(false)
      setFormData({...formData, twitter: ''})
    }
  }

  function handleYouTube() {
    setCheckedYouTube(!checkedYouTube)

    if (checkedYouTube === false) {
      setInvalid(false)
      setFormData({...formData, youtube: ''})
    }
  }

  function handleCancel() {
    setFormData({
      bio: '',
      website: ''
    })
    router.push(`/${json.username}`)
    router.refresh()
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (checkedFacebook && formData.facebook === '' || checkedInstagram && formData.instagram === '' || checkedLinkedIn && formData.linkedin === '' || checkedTikTok && formData.tiktok === '' || checkedTwitter && formData.twitter === '' || checkedYouTube && formData.youtube === '') {
      setInvalid(true)
    } else {
      onSubmit(formData)
      setInvalid(false)
    }
  }

  return (
    <div className='w-2/3 bg-old-lace/90 dark:bg-raisin/90'>
      <form className='w-full space-y-4' onSubmit={handleSubmit}>
        <div className='space-y-2'>
          <div className='flex justify-start items-center'>
            <input 
              autoComplete='off' 
              className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 border-2 border-purple dark:border-violet rounded-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none`} 
              name='bio' 
              type='text' 
              placeholder='' 
              maxLength={charLimit.bio}
              disabled={isLoading} 
              value={formData.bio}
              onChange={handleChange}
            />
            <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150 ${formData.bio && 'text-dark-armor/60 dark:text-old-lace/60 scale-75'}`} htmlFor='bio'>Bio</label>
          </div>
          <div className='flex justify-start items-center'>
            <input 
              autoComplete='off' 
              className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 border-2 border-purple dark:border-violet rounded-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none`} 
              name='website' 
              type='text' 
              placeholder='' 
              disabled={isLoading} 
              value={formData.website}
              onChange={handleChange}
            />
            <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150 ${formData.website && 'text-dark-armor/60 dark:text-old-lace/60 scale-75'}`} htmlFor='website'>Website <span className='text-dark-armor/60 dark:text-old-lace/60'>ex. yourwebsitelink.com</span></label>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='text-3xl'>Social Media:</h2>
          {/* facebook */}
          <div className='flex flex-col justify-start items-start gap-2'>
            <div className='flex justify-start items-center gap-2'>
              <input className='h-8 w-8 appearance-none border border-old-lace rounded-md hover:bg-purple/40 dark:hover:bg-violet/40 checked:bg-purple dark:checked:bg-violet cursor-pointer' type="checkbox" name="facebook" id="facebook" onChange={handleFacebook} />
              <label className='text-xl cursor-pointer' htmlFor="facebook">Facebook</label>
            </div>
            {checkedFacebook && 
              <div className='w-full flex justify-start items-center'>
                <input 
                  autoComplete='off' 
                  className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'}`} 
                  name='facebook' 
                  type='text' 
                  placeholder='' 
                  disabled={isLoading} 
                  value={formData.facebook}
                  onChange={handleChange}
                />
                <label className={`label dark-label absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-dark-armor dark:text-old-lace'} peer-focus:text-dark-armor/60 dark:peer-focus:text-old-lace/60 ${formData.facebook && 'text-dark-armor/60 dark:text-old-lace/60 scale-75'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='facebook'>https://www.facebook.com/your_username</label>
              </div>
            }
          </div>
          {/* instagram */}
          <div className='flex flex-col justify-start items-start gap-2'>
            <div className='flex justify-start items-center gap-2'>
              <input className='h-8 w-8 appearance-none border border-old-lace rounded-md hover:bg-purple/40 dark:hover:bg-violet/40 checked:bg-purple dark:checked:bg-violet cursor-pointer' type="checkbox" name="instagram" id="instagram" onChange={handleInstagram} />
              <label className='text-xl cursor-pointer' htmlFor="instagram">Instagram</label>
            </div>
            {checkedInstagram && 
              <div className='w-full flex justify-start items-center'>
                <input 
                  autoComplete='off' 
                  className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'}`} 
                  name='instagram' 
                  type='text' 
                  placeholder='' 
                  disabled={isLoading} 
                  value={formData.instagram}
                  onChange={handleChange}
                />
                <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-dark-armor dark:text-old-lace'} peer-focus:text-dark-armor/60 dark:peer-focus:text-old-lace/60 ${formData.instagram && 'text-dark-armor/60 dark:text-old-lace/60 scale-75'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='instagram'>https://www.instagram.com/your_username</label>
              </div>
            }
          </div>
          {/* linkedin */}
          <div className='flex flex-col justify-start items-start gap-2'>
            <div className='flex justify-start items-center gap-2'>
              <input className='h-8 w-8 appearance-none border border-old-lace rounded-md hover:bg-purple/40 dark:hover:bg-violet/40 checked:bg-purple dark:checked:bg-violet cursor-pointer' type="checkbox" name="linkedin" id="linkedin" onChange={handleLinkedIn} />
              <label className='text-xl cursor-pointer' htmlFor="linkedin">LinkedIn</label>
            </div>
            {checkedLinkedIn && 
              <div className='w-full flex justify-start items-center'>
                <input 
                  autoComplete='off' 
                  className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'}`} 
                  name='linkedin' 
                  type='text' 
                  placeholder='' 
                  disabled={isLoading} 
                  value={formData.linkedin}
                  onChange={handleChange}
                />
                <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-dark-armor dark:text-old-lace'} peer-focus:text-dark-armor/60 dark:peer-focus:text-old-lace/60 ${formData.linkedin && 'text-dark-armor/60 dark:text-old-lace/60 scale-75'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='linkedin'>https://www.linkedin.com/in/your_username</label>
              </div>
            }
          </div>
          {/* tiktok */}
          <div className='flex flex-col justify-start items-start gap-2'>
            <div className='flex justify-start items-center gap-2'>
              <input className='h-8 w-8 appearance-none border border-old-lace rounded-md hover:bg-purple/40 dark:hover:bg-violet/40 checked:bg-purple dark:checked:bg-violet cursor-pointer' type="checkbox" name="tiktok" id="tiktok" onChange={handleTikTok} />
              <label className='text-xl cursor-pointer' htmlFor="tiktok">TikTok</label>
            </div>
            {checkedTikTok && 
              <div className='w-full flex justify-start items-center'>
                <input 
                  autoComplete='off' 
                  className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'}`} 
                  name='tiktok' 
                  type='text' 
                  placeholder='' 
                  disabled={isLoading} 
                  value={formData.tiktok}
                  onChange={handleChange}
                />
                <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-dark-armor dark:text-old-lace'} peer-focus:text-dark-armor/60 dark:peer-focus:text-old-lace/60 ${formData.tiktok && 'text-dark-armor/60 dark:text-old-lace/60 scale-75'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='tiktok'>https://www.tiktok.com/@your_username</label>
              </div>
            }
          </div>
          {/* twitter */}
          <div className='flex flex-col justify-start items-start gap-2'>
            <div className='flex justify-start items-center gap-2'>
              <input className='h-8 w-8 appearance-none border border-old-lace rounded-md hover:bg-purple/40 dark:hover:bg-violet/40 checked:bg-purple dark:checked:bg-violet cursor-pointer' type="checkbox" name="twitter" id="twitter" onChange={handleTwitter} />
              <label className='text-xl cursor-pointer' htmlFor="twitter">Twitter</label>
            </div>
            {checkedTwitter && 
              <div className='w-full flex justify-start items-center'>
                <input 
                  autoComplete='off' 
                  className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'}`} 
                  name='twitter' 
                  type='text' 
                  placeholder='' 
                  disabled={isLoading} 
                  value={formData.twitter}
                  onChange={handleChange}
                />
                <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-dark-armor dark:text-old-lace'} peer-focus:text-dark-armor/60 dark:peer-focus:text-old-lace/60 ${formData.twitter && 'text-dark-armor/60 dark:text-old-lace/60 scale-75'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='twitter'>https://twitter.com/your_username</label>
              </div>
            }
          </div>
          {/* youtube */}
          <div className='flex flex-col justify-start items-start gap-2'>
            <div className='flex justify-start items-center gap-2'>
              <input className='h-8 w-8 appearance-none border border-old-lace rounded-md hover:bg-purple/40 dark:hover:bg-violet/40 checked:bg-purple dark:checked:bg-violet cursor-pointer' type="checkbox" name="youtube" id="youtube" onChange={handleYouTube} />
              <label className='text-xl cursor-pointer' htmlFor="youtube">YouTube</label>
            </div>
            {checkedYouTube && 
              <div className='w-full flex justify-start items-center'>
                <input 
                  autoComplete='off' 
                  className={`peer relative w-full pb-1 px-2 sm:px-4 pt-8 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none ${invalid ? 'border-2  border-danger dark:border-danger-dark' : 'border-2 border-purple'} ${invalid ? 'bg-old-lace focus:bg-danger/20 focus:dark:bg-danger-dark/20 focus:border-danger dark:focus:border-danger-dark text-danger dark:text-danger-dark' : 'bg-fade dark:bg-fade-dark'}`} 
                  name='youtube' 
                  type='text' 
                  placeholder='' 
                  disabled={isLoading} 
                  value={formData.youtube}
                  onChange={handleChange}
                />
                <label className={`absolute z-10 ml-2 sm:ml-4 origin-[0] text-xl ${invalid ? 'text-danger dark:text-danger-dark' : 'text-dark-armor dark:text-old-lace'} peer-focus:text-dark-armor/60 dark:peer-focus:text-old-lace/60 ${formData.youtube && 'text-dark-armor/60 dark:text-old-lace/60 scale-75'} cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transform -translate-y-3 transition duration-150`} htmlFor='youtube'>https://www.youtube.com/@your_username</label>
              </div>
            }
          </div>
        </div>
        <div className='flex gap-2'>
          <Button type='button' onClick={() => handleCancel()}>Cancel</Button>
          <Button type='submit'>Save</Button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm