import type { Metadata } from 'next'
import { Libre_Bodoni } from 'next/font/google'
import './globals.css'

const libre = Libre_Bodoni({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'T.I.M.S.',
  description: 'T.I.M.S., short for This Is My Story, is a safe space to share your story and show others that they aren’t alone and see that you aren’t either!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${libre.className} bg-purple text-dark-armor`}>{children}</body>
    </html>
  )
}
