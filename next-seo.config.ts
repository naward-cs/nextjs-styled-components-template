import type { NextSeoProps } from 'next-seo'

//declare single title and description for multiple uses to ensure content stays sync
const title = 'Title A'
const description = 'Description A'

//refer to https://github.com/garmeeh/next-seo/blob/master/APP_DIRECTORY.md for optional defaults
export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title,
  description,
  canonical: process.env.NEXT_PUBLIC_SITE_URL,
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
}
