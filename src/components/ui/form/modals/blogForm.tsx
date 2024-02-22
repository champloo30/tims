'use client'

import React, { useState } from 'react'

import Button from '@/components/ui/button'

export interface BlogFormProps {
  formtype: 'create' | 'edit' | undefined,
  onSubmit: (data: BlogData) => void,
  isLoading: boolean
}

export interface BlogData {
  title: string,
  content: string
}

const BlogForm:React.FC<BlogFormProps> = ({ formtype, onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<BlogData>({
    title: '',
    content: ''
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
    
    if (formData.content === '') {
      setInvalid(true)
    } else {
      setInvalid(false)
      onSubmit(formData)
      setFormData({
        title: '',
        content: ''
      })
    }
  }

  return (
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
      <Button title={formtype === 'create' ? 'Post Blog' : 'Update Blog'}>{formtype === 'create' ? 'Post' : 'Update'}</Button>
    </form>
  )
}

export default BlogForm