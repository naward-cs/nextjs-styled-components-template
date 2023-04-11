import { Metadata } from 'next'
import LoadRootCSS from '@/lib/loadRootCSS'
import LoadStyledComponents from '@/lib/loadStyledComponents'

const branch = process.env.GIT_BRANCH === 'main' ? true : false
//declare single title and description for multiple uses to ensure content stays sync
const title = 'Title A'
const description = 'Description A'
export const metadata: Metadata = {
  title: {
    default: 'Nextjs Template',
    template: '%s | Nextjs',
  },
  robots: {
    index: branch,
    follow: branch,
    googleBot: {
      index: branch,
      follow: branch,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title, //this can be different for openGraph vice using defaults
    description, //this can be different for openGraph vice using default
    images: [
      {
        url: 'https://www.test.ie/og-image-a-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt A',
        type: 'image/jpeg',
        secureUrl: 'https://www.test.ie/secure-og-image-a-01.jpg',
      },
    ],
    siteName: 'SiteName A',
  },
  twitter: {
    title: 'nextjs tempalte',
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
}
//add the the following for verification into your metadata
// verification: {
//   google: '',
//   yandex: '',
// },

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <LoadStyledComponents>
          <LoadRootCSS>{children}</LoadRootCSS>
        </LoadStyledComponents>
      </body>
    </html>
  )
}
