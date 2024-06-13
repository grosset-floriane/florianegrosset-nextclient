'use client'
import { useState } from 'react'
import NavItem from './NavItem'
import styles from './Nav.module.css'
import { Box } from '@mui/material'
import MenuButton from './MenuButton'
import CloseButton from './CloseButton'
import useMediaQuery from '@/app/hooks/useMediaQuery'
import { NAV_LINKS } from '@/app/contants/navLinks'

export const Nav = () => {
  const { isDesktop } = useMediaQuery()
  const [isOpen, setIsOpen] = useState(false)

  const nav = (
    <nav className={`${styles.nav} ${isOpen ? styles.navopen : ''}`}>
      {NAV_LINKS.map(({ label, url }) => (
        <NavItem
          key={label}
          url={url}
          label={label}
          onClick={() => setIsOpen(false)}
        />
      ))}
    </nav>
  )
  return (
    <Box>
      {!isDesktop && <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />}
      {isDesktop && nav}
      {!isDesktop && isOpen && (
        <Box className={styles.container}>
          {nav}
          <CloseButton setIsOpen={setIsOpen} />
        </Box>
      )}
    </Box>
  )
}
