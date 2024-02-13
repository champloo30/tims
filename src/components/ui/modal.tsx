'use client'

import React, { useState } from 'react'
import PostForm, { PostData } from '@/components/ui/form/modals/postForm'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'

interface ModalProps {
  modal: 'post',
  postFormType?: 'create' | 'edit' | undefined,
  close: () => void
}

const Modal:React.FC<ModalProps> = ({ modal, postFormType, close }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function createPostSubmit(formData: PostData) {
    console.log(formData);
    setIsLoading(true)
    axios.post('/api/post', formData)
    .then(() => {
      toast.success('Post created')
      router.push('/')
      router.refresh()
    })
    .catch(() => {toast.error('Something went wrong')})
    .finally(() => {setIsLoading(false)})
  }

  return (
    <div className='absolute h-screen w-screen z-30 inset-0 flex justify-center items-center bg-purple/30 dark:bg-violet/30'>
      {modal === 'post' && <PostForm formtype={postFormType} close={close} onSubmit={createPostSubmit} isLoading={isLoading} />}
    </div>
  )
}

export default Modal