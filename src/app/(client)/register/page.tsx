import React from 'react'

import { getCurrentUser } from '../../../../actions/getCurrentUser'

import Register from '@/components/auth/register'

const RegisterPage = async () => {
  const currentUser = await getCurrentUser()

  return (
    <>
      <Register currentUser={currentUser} />
    </>
  )
}

export default RegisterPage