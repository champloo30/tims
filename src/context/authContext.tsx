'use client' 

import React from 'react'
import { SessionProvider } from "next-auth/react"

interface AuthProps {
  children: React.ReactNode,
}

const Auth: React.FC<AuthProps> = ({ children }) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Auth