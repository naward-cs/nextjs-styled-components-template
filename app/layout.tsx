import LoadRootCSS from '@/lib/loadRootCSS'
import LoadStyledComponents from '@/lib/loadStyledComponents'

const branch = process.env.GIT_BRANCH === 'main' ? true : false

export const metadata = {
  title: {
    default: 'Nextjs Template',
    template: '%s | Nextjs',
  },
  robots: {
    index: { branch },
    follow: { branch },
    googleBot: {
      index: { branch },
      follow: { branch },
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'nextjs tempalte',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
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
