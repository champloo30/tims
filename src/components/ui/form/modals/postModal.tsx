'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'
import { useRouter } from 'next/navigation'

import axios from 'axios'
import toast from 'react-hot-toast'

import { User } from '@prisma/client'
import BlogForm, { BlogData } from './modalForms/postForms/blogForm'
import FeedForm, { FeedData } from './modalForms/postForms/feedForm'

interface postModalProps {
  currentUser: User | null
  formType?: 'create' | 'edit' | undefined,
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const PostModal:React.FC<postModalProps> = ({ currentUser, formType, setOpenModal }) => {
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
    setIsLoading(true)
    axios.post(`/api/posts`, formData)
    .then(() => {
      setOpenModal(false)
      formData.draft === false ? toast.success('Post created') : toast.success('Draft created')
      router.refresh()
    })
    .catch(() => {toast.error('Something went wrong')})
    .finally(() => {setIsLoading(false)})
  }

  async function createFeedSubmit(formData: FeedData) {
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

  return (
    <div className='h-full w-full p-8 flex flex-col justify-evenly bg-old-lace dark:bg-raisin shadow-xl'>
      <div className='w-full flex gap-4 text-3xl'>
        <button className={`w-full py-4 ${feed && 'bg-fade dark:bg-fade-dark'} hover:bg-fade dark:hover:bg-fade-dark rounded-lg ease-in duration-150`} onClick={() => switchToFeed()}>Post</button>
        <button className={`w-full py-4 ${blog && 'bg-fade dark:bg-fade-dark'} hover:bg-fade dark:hover:bg-fade-dark rounded-lg ease-in duration-150`} onClick={() => switchToBlog()}>Blog</button>
      </div>
      <div className='h-3/4 w-full'>
        {blog && <BlogForm currentUser={currentUser} formtype={formType} onSubmit={createBlogSubmit} isLoading={isLoading} setOpenModal={setOpenModal} />}
        {feed && <FeedForm currentUser={currentUser} formtype={formType} onSubmit={createFeedSubmit} isLoading={isLoading} setOpenModal={setOpenModal} />}
      </div>
    </div>
  )
}

export default PostModal