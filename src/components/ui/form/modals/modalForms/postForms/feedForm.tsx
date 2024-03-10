import React, { Dispatch, SetStateAction, useState } from 'react'
import Button from '../../../../button'
import Modal from '@/components/ui/modal'
import { User } from '@prisma/client'

export interface FeedFormProps {
  currentUser: User | null
  formtype: 'create' | 'edit' | undefined,
  onSubmit: (data: FeedData) => void,
  isLoading: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

export interface FeedData {
  anonymous?: boolean,
  content: string,
  draft: boolean
}

const FeedForm:React.FC<FeedFormProps> = ({ currentUser, formtype, onSubmit, isLoading, setOpenModal }) => {
  const [formData, setFormData] = useState<FeedData>({
    anonymous: false,
    content: '',
    draft: false
  })

  const [invalid, setInvalid] = useState(false)

  const [closeModal, setCloseModal] = useState(false)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target
    setFormData({ ...formData, [name]: checked })
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
        anonymous: false,
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
        anonymous: false,
        content: '',
        draft: false
      })
    } else {
      setFormData({...formData, draft: true})
      onSubmit(formData)
      setFormData({
        anonymous: false,
        content: '',
        draft: false
      })
    }
  }

  return (
    <form className='h-full w-full flex flex-col justify-evenly' onSubmit={handleSubmit}>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl text-purple dark:text-old-lace'>{formtype === 'create' ? 'Create' : 'Update'} Post</h1>
      </div>
      <textarea 
        className='h-1/2 w-full px-2 py-1 bg-fade dark:bg-fade-dark text-sm placeholder:text-sm placeholder:text-dark-armor/70 dark:placeholder:text-old-lace/70' 
        name='content'
        placeholder='Enter text here...'
        disabled={isLoading}
        value={formData.content}
        onChange={handleTextAreaChange}
        maxLength={500}
      ></textarea>
      <span className='text-sm text-dark-armor/50 dark:text-old-lace/50'>{formData.content.length}/500</span>
      <div className='flex justify-start items-center gap-2'>
        <label htmlFor="anonymous">Would you like to make this post anonymous?</label>
        <input 
          name='anonymous'
          type="checkbox" 
          disabled={isLoading}
          checked={formData.anonymous}
          onChange={handleInputChange}
        />
      </div>
      <div className='flex gap-4'>
        <Button title={formtype === 'create' ? 'Post Feed' : 'Update Feed'}>{formtype === 'create' ? 'Post' : 'Update'}</Button>
        <Button type='button' onClick={() => setCloseModal(true)}>Cancel</Button>
      </div>
      {closeModal && <Modal currentUser={currentUser} modal='close' setOpenModal={setOpenModal} postType={'blog'} submit={handleDraft} />}
    </form>
  )
}

export default FeedForm