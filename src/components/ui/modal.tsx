'use client'

import React, { Dispatch, SetStateAction } from 'react'

import PostModal from '@/components/ui/form/modals/postModal'
import { User } from '@prisma/client'
import CloseModal from './form/modals/closeModal'
import EditProfile from './form/modals/editProfileModal'
import { ProfileData } from './form/modals/modalForms/editProfileForm'

interface ModalProps {
  currentUser: User | null
  modal: 'post' | 'close' | 'edit-profile',
  setOpenModal: Dispatch<SetStateAction<boolean>>
  postType?: 'feed' | 'blog' | undefined
  submit?: () => void
}

const Modal:React.FC<ModalProps> = ({ currentUser, modal, setOpenModal, postType, submit }) => {
  return (
    <div className='fixed h-screen w-screen z-50 inset-0 flex justify-center items-center bg-purple/30 dark:bg-violet/30'>
      {modal === 'close' && <CloseModal setOpenModal={setOpenModal} postType={postType} submit={submit}  />}
      {modal === 'post' && <PostModal currentUser={currentUser} formType='create' setOpenModal={setOpenModal} />}
      {modal === 'edit-profile' && <EditProfile currentUser={currentUser} setOpenModal={setOpenModal} />}
    </div>
  )
}

export default Modal