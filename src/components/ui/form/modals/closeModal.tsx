'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'
import Button from '../../button'
import { FeedData } from './modalForms/postForms/feedForm'
import { BlogData } from './modalForms/postForms/blogForm'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface CloseModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>
  postType: 'feed' | 'blog' | undefined
  submit?: () => void
}

const CloseModal:React.FC<CloseModalProps> = ({ setOpenModal, postType, submit }) => {
  
  return (
    <div className='p-8 flex flex-col justify-center items-center gap-4 bg-old-lace dark:bg-raisin'>
      <p className='text-xl'>Would you like to save this in drafts?</p>
      <div className='flex gap-4'>
        {postType === 'feed' && <Button outline onClick={() => setOpenModal(false)}>Yes</Button>}
        {postType === 'blog' && <Button outline onClick={submit}>Yes</Button>}
        <Button outline onClick={() => setOpenModal(false)}>No</Button>
      </div>
    </div>
  )
}

export default CloseModal