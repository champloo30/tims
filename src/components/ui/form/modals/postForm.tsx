'use client'

import React, { useState } from 'react'

import { Close } from '@mui/icons-material'

import Button from '@/components/ui/button'

export interface PostFormProps {
  formtype: 'create' | 'edit' | undefined,
  close: () => void,
  onSubmit: (data: PostData) => void,
  isLoading: boolean
}

export interface PostData {
  title?: string,
  body: string
}

const PostForm:React.FC<PostFormProps> = ({ formtype, close, onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<PostData>({
    title: '',
    body: ''
  })
  const [invalid, setInvalid] = useState(false)

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
    
    if (formData.body === '') {
      setInvalid(true)
    } else {
      onSubmit(formData)
      setInvalid(false)
    }
  }

  return (
    <form className='h-5/6 w-2/3 p-8 space-y-4 bg-old-lace dark:bg-raisin shadow-xl' onSubmit={handleSubmit}>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl text-purple dark:text-old-lace'>{formtype === 'create' ? 'Create' : 'Update'} Post</h1>
        <button title='Close' onClick={close}>
          <Close />
        </button>
      </div>
      <input 
        className='w-full px-2 py-1 bg-fade dark:bg-fade-dark text-2xl placeholder:text-2xl placeholder:text-dark-armor/70 dark:placeholder:text-old-lace/70' 
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
        className='h-1/2 w-full px-2 py-1 bg-fade dark:bg-fade-dark placeholder:text-dark-armor/70 dark:placeholder:text-old-lace/70' 
        name='body'
        placeholder='Enter text here...'
        disabled={isLoading}
        value={formData.body}
        onChange={handleTextAreaChange}
        maxLength={1000}
      ></textarea>
      <span className='text-sm text-dark-armor/50 dark:text-old-lace/50'>{formData.body.length}/1000</span>
      <Button title={formtype === 'create' ? 'Create Post' : 'Update Post'}>{formtype === 'create' ? 'Post' : 'Update'}</Button>
    </form>
  )
}

export default PostForm