'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'
import { useRouter } from 'next/navigation'

import axios from 'axios'
import toast from 'react-hot-toast'
import { Close } from '@mui/icons-material'

import BlogForm, { BlogData } from '@/components/ui/form/modals/blogForm'
import FeedForm, { FeedData } from '@/components/ui/form/modals/feedForm'
import { User } from '@prisma/client'

interface postModalProps {
  currentUser: User | null
  formType?: 'create' | 'edit' | undefined,
  close: () => void,
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const PostModal:React.FC<postModalProps> = ({ currentUser, formType, close, setOpenModal }) => {
  const [feed, setFeed] = useState(true)
  const [blog, setBlog] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  function switchToBlog() {
    if (feed) {
      setFeed(false)
      setBlog(true)
    }
  }

  function switchToFeed() {
    if (blog) {
      setBlog(false)
      setFeed(true)
    }
  }

  async function createBlogSubmit(formData: BlogData) {
    console.log(formData);
    setIsLoading(true)
    axios.post(`/api/posts`, formData)
    .then(() => {
      setOpenModal(false)
      toast.success('Post created')
      router.refresh()
    })
    .catch(() => {toast.error('Something went wrong')})
    .finally(() => {setIsLoading(false)})
  }

  async function createFeedSubmit(formData: FeedData) {
    console.log(formData);
    setIsLoading(true)
    axios.post(`/api/posts`, formData)
    .then(() => {
      setOpenModal(false)
      toast.success('Post created')
      router.push('/')
      router.refresh()
    })
    .catch(() => {toast.error('Something went wrong')})
    .finally(() => {setIsLoading(false)})
  }

  return (
    <div className='h-[90%] w-2/3 p-8 flex flex-col justify-evenly bg-old-lace dark:bg-raisin shadow-xl'>
      <div className='w-full flex justify-end' onClick={close}>
        <Close />
      </div>
      <div className='w-full flex justify-evenly text-3xl'>
        <button className='px-8 py-4 hover:bg-fade dark:hover:bg-fade-dark rounded-lg ease-in duration-150' onClick={() => switchToFeed()}>Post</button>
        <button className='px-8 py-4 hover:bg-fade dark:hover:bg-fade-dark rounded-lg ease-in duration-150' onClick={() => switchToBlog()}>Blog</button>
      </div>
      <div className='h-3/4 w-full'>
        {blog && <BlogForm formtype={formType} onSubmit={createBlogSubmit} isLoading={isLoading} />}
        {feed && <FeedForm formtype={formType} onSubmit={createFeedSubmit} isLoading={isLoading} />}
      </div>
    </div>
  )
}

export default PostModal