import Image from 'next/image'
import type { ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { StoreProvider } from './StoreProvider'
import theme from './theme'
import Layout from './components/layout/Layout'
import TopAppBar from './components/topAppBar/TopAppBar'
import Footer from './components/footer/Footer'
import { Metadata } from 'next'

interface Props {
  readonly children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Layout>
                <TopAppBar />

                {children}
              </Layout>
              <Footer />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  )
}

export const metadata: Metadata = {
  title: {
    template: '%s - Floriane Grosset',
    default: 'About',
  },
}
