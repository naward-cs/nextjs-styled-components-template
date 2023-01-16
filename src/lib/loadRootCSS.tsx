'use client'

import { BaseCSS } from 'styled-bootstrap-grid'
import GlobalStyle from '@/styles/global'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import primary from '@/styles/theme'

export const LoadRootCSS = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextNProgress />
      <BaseCSS />
      <ThemeProvider theme={primary}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  )
}

export default LoadRootCSS
