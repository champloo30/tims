'use client'

import React, { Dispatch, SetStateAction } from 'react'

import PostModal from '@/components/ui/form/modals/postModal'
import { User } from '@prisma/client'

interface ModalProps {
  currentUser: User | null
  modal: 'post',
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const Modal:React.FC<ModalProps> = ({ currentUser, modal, setOpenModal }) => {
  return (
    <div className='absolute h-screen w-screen z-30 inset-0 flex justify-center items-center bg-purple/30 dark:bg-violet/30'>
      {modal === 'post' && <PostModal currentUser={currentUser} formType='create' close={() => setOpenModal(false)} setOpenModal={setOpenModal} />}
    </div>
  )
}

export default Modal