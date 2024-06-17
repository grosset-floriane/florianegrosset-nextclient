'use client'
import { AppBar, Toolbar } from '@mui/material'
import type { ReactElement } from 'react'
import { Nav } from '../Nav/Nav'
import HeaderTitle from '../headerTitle/HeaderTitle'
import styles from './TopAppBar.module.css'
import { Slide } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'

interface Props {
  children: ReactElement<any, any>
}

const HideOnScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const TopAppBar: React.FC = () => {
  return (
    <HideOnScroll>
      <AppBar position="fixed" color="background" className={styles.appbar}>
        <Toolbar variant="dense" className={styles.toolbar}>
          <HeaderTitle />
          <Nav />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default TopAppBar
