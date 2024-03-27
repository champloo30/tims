import Button from '@/components/ui/button'
import { User } from '@prisma/client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import EditProfileForm, { ProfileData } from './modalForms/editProfileForm'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'

interface EditProfileModalProps {
  currentUser: User | null
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ currentUser, setOpenModal }) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const json = JSON.parse(JSON.stringify(currentUser))

  async function submit(formData: ProfileData) {
    console.log(formData);
    setIsLoading(true)
    axios.post('/api/profile', formData)
    .then(() => {
      toast.success('Profile updated')
    })
    .catch(() => toast.error('Something went wrong'))
    .finally(() => {
      setOpenModal(false)
      router.push(`/${json.username}`)
      router.refresh()
      setIsLoading(false)
    })
  }

  return (
    <div className='h-[90%] w-2/3'>
      <EditProfileForm currentUser={currentUser} setOpenModal={setOpenModal} onSubmit={submit} isLoading={isLoading} />
    </div>
  )
}

export default EditProfileModal