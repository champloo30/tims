import Button from '@/components/ui/button'
import { User } from '@prisma/client'
import React, { Dispatch, SetStateAction } from 'react'
import EditProfileForm from './modalForms/editProfileForm'

interface EditProfileModalProps {
  currentUser: User | null
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ currentUser, setOpenModal }) => {
  return (
    <div className='h-[90%] w-2/3'>
      <EditProfileForm currentUser={currentUser} setOpenModal={setOpenModal} />
    </div>
  )
}

export default EditProfileModal