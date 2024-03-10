'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'

import Button from '@/components/ui/button'
import Modal from '@/components/ui/modal'
import { User } from '@prisma/client'
import toast from 'react-hot-toast'

export interface BlogFormProps {
  currentUser: User | null
  formtype: 'create' | 'edit' | undefined,
  onSubmit: (data: BlogData) => void,
  isLoading: boolean,
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

export interface BlogData {
  title: string,
  content: string,
  draft?: boolean
}

const BlogForm:React.FC<BlogFormProps> = ({ currentUser, formtype, onSubmit, isLoading, setOpenModal }) => {
  const [formData, setFormData] = useState<BlogData>({
    title: '',
    content: '',
    draft: false
  })

  const [invalid, setInvalid] = useState(false)

  const [closeModal, setCloseModal] = useState(false)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if (formData.content === '') {
      setInvalid(true)
    } else {
      setInvalid(false)
      onSubmit(formData)
      setFormData({
        title: '',
        content: '',
        draft: false
      })
    }
  }  

  function handleDraft() {
    if (formData.draft === false) {
      setFormData({...formData, draft: true})
    }

    if (formData.draft === true) {
      onSubmit(formData)
      setFormData({
        title: '',
        content: '',
        draft: false
      })
    } else {
      setFormData({...formData, draft: true})
      onSubmit(formData)
      setFormData({
        title: '',
        content: '',
        draft: false
      })
    }
  }

  return (
    <>
      <form className='h-full w-full flex flex-col justify-evenly' onSubmit={handleSubmit}>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl text-purple dark:text-old-lace'>{formtype === 'create' ? 'Create' : 'Update'} Blog</h1>
        </div>
        <input 
          className='w-full px-2 py-1 bg-fade dark:bg-fade-dark text-lg placeholder:text-lg placeholder:text-dark-armor/70 dark:placeholder:text-old-lace/70' 
          name='title'
          type="text" 
          placeholder='Title' 
          disabled={isLoading}
          value={formData.title}
          onChange={handleInputChange}
          maxLength={75}
        />
        <span className='text-sm text-dark-armor/50 dark:text-old-lace/50'>{formData.title?.length}/75</span>
        <textarea 
          className='h-1/2 w-full px-2 py-1 bg-fade dark:bg-fade-dark text-sm placeholder:text-sm placeholder:text-dark-armor/70 dark:placeholder:text-old-lace/70' 
          name='content'
          placeholder='Enter text here...'
          disabled={isLoading}
          value={formData.content}
          onChange={handleTextAreaChange}
          maxLength={1000}
        ></textarea>
        <span className='text-sm text-dark-armor/50 dark:text-old-lace/50'>{formData.content.length}/1000</span>
        <div className='flex gap-4'>
          <Button type='submit' title={formtype === 'create' ? 'Post Blog' : 'Update Blog'}>{formtype === 'create' ? 'Post' : 'Update'}</Button>
          <Button type='button' onClick={() => setCloseModal(true)}>Cancel</Button>
        </div>
      </form>
      {closeModal && <Modal currentUser={currentUser} modal='close' setOpenModal={setOpenModal} postType={'blog'} submit={handleDraft} />}
    </>
  )
}

export default BlogForm