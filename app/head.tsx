import { NextSeo } from 'next-seo'
import { NEXT_SEO_DEFAULT } from 'next-seo.config'

//if branch not production branch don't index or follow
const branch = process.env.GIT_BRANCH === 'main' ? true : false

export default function Head() {
  return (
    <>
      <NextSeo
        {...NEXT_SEO_DEFAULT}
        useAppDir={true}
        noindex={branch}
        nofollow={branch}
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
