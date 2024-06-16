'use client'
import { useState } from 'react'
import NavItem from './NavItem'
import styles from './Nav.module.css'
import { Box } from '@mui/material'
import MenuButton from './MenuButton'
import CloseButton from './CloseButton'
import useMediaQuery from '@/app/hooks/useMediaQuery'
import { NAV_LINKS } from '@/app/contants/navLinks'
import { Modal } from '@mui/base/Modal'
import HeaderTitle from '../headerTitle/HeaderTitle'
import Link from 'next/link'

export const Nav = () => {
  const { isDesktop } = useMediaQuery()
  const [isOpen, setIsOpen] = useState(false)

  const nav = (
    <nav className={`${styles.nav} ${isOpen ? styles.navopen : ''}`}>
      <ul className={styles.list}>
        {NAV_LINKS.map(({ label, url }) => (
          <NavItem
            key={label}
            url={url}
            label={label}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </ul>
    </nav>
  )
  return (
    <Box>
      {!isDesktop && <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />}
      {isDesktop && nav}
      {!isDesktop && isOpen && (
        <Modal open={isOpen} aria-label="menu">
          <Box className={styles.container}>
            <HeaderTitle isOnPrimary />
            <Box className={styles.linksContainer}>
              {nav}
              <CloseButton setIsOpen={setIsOpen} />
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  )
}
