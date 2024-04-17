'use client'

import React, { Dispatch, FormEventHandler, SetStateAction } from 'react'

import PostModal from '@/components/ui/form/modals/postModal'
import { User } from '@prisma/client'
import EditProfileModal from './form/modals/editProfileModal'

interface ModalProps {
  currentUser: User | null
  modal: 'post' | 'edit-profile',
  setOpenModal: Dispatch<SetStateAction<boolean>>
  submit?: (e: FormEventHandler<HTMLButtonElement>) => void
}

const Modal:React.FC<ModalProps> = ({ currentUser, modal, setOpenModal }) => {
  return (
    <div className='fixed h-screen w-screen z-50 inset-0 flex justify-center items-center'>
      <div className='absolute h-[90%] w-2/3'>
        {modal === 'post' && <PostModal currentUser={currentUser} formType='create' setOpenModal={setOpenModal} />}
        {modal === 'edit-profile' && <EditProfileModal currentUser={currentUser} setOpenModal={setOpenModal} />}
      </div>
      <div className='h-full w-full bg-purple/30 dark:bg-violet/30' onClick={() => setOpenModal(false)}></div>
    </div>
  )
}

export default Modal