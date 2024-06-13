import Image from 'next/image'
import type { ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { StoreProvider } from './StoreProvider'
import theme from './theme'
import Layout from './components/layout/Layout'
import TopAppBar from './components/topAppBar/TopAppBar'
import styles from './styles/layout.module.css'

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
                <section className={styles.container}>
                  <header className={styles.header}>
                    <Image
                      src="/logo.svg"
                      className={styles.logo}
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </header>

                  <main className={styles.main}>{children}</main>

                  <footer className={styles.footer}>
                    <span>Learn </span>
                    <a
                      className={styles.link}
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React
                    </a>
                    <span>, </span>
                    <a
                      className={styles.link}
                      href="https://redux.js.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Redux
                    </a>
                    <span>, </span>
                    <a
                      className={styles.link}
                      href="https://redux-toolkit.js.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Redux Toolkit
                    </a>
                    <span>, </span>
                    <a
                      className={styles.link}
                      href="https://react-redux.js.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React Redux
                    </a>
                    ,<span> and </span>
                    <a
                      className={styles.link}
                      href="https://reselect.js.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reselect
                    </a>
                  </footer>
                </section>
              </Layout>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  )
}
