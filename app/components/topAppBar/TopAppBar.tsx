import { AppBar, Box, Toolbar } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Nav } from '../Nav/Nav'
import HeaderTitle from '../headerTitle/HeaderTitle'
import styles from './TopAppBar.module.css'

interface Props {}

const TopAppBar: React.FC<Props> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="background" className={styles.appbar}>
        <Toolbar variant="dense" className={styles.toolbar}>
          <Link href="/" className={styles.link}>
            <HeaderTitle />
          </Link>
          <Nav />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopAppBar
