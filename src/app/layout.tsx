import type { Metadata } from 'next'
import { Libre_Bodoni } from 'next/font/google'
import './globals.css'
import Theme from '@/context/themeContext'
import { getCurrentUser } from '../../actions/getCurrentUser'
import Toast from '@/context/toastContext'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import Auth from '@/context/authContext'

const libre = Libre_Bodoni({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-libre' 
})

export const metadata: Metadata = {
  title: 'T.I.M.S.',
  description: 'T.I.M.S., short for This Is My Story, is a safe space to share your story and show others that they aren’t alone and see that you aren’t either!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  console.log('user: ', currentUser);

  const session = await getServerSession(authOptions)
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${libre.className} bg-purple dark:bg-violet text-dark-armor dark:text-old-lace`}>
        <Auth>
          <Theme>
            <Toast />
            {children}
          </Theme>
        </Auth>
      </body>
    </html>
  )
}
