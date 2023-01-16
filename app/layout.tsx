import LoadRootCSS from '@/lib/loadRootCSS'
import LoadStyledComponents from '@/lib/loadStyledComponents'

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
