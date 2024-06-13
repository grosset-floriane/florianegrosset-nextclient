'use client'
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './NavItem.module.css'
import { LIGHT_PALETTE } from '@/app/contants/theme'
import useMediaQuery from '@/app/hooks/useMediaQuery'

interface Props {
  label: string
  url: string
  onClick?: () => void
}

const NavItem: React.FC<Props> = ({ label, url, onClick }) => {
  const { isDesktop } = useMediaQuery()
  const pathname = usePathname()

  return (
    <ListItem className={styles.listItem}>
      <ListItemButton
        LinkComponent={Link}
        href={url}
        className={`${styles.link} ${
          pathname === url ? styles.activeLink : ''
        }`}
        sx={{
          '&:hover > div > span, &:focus-visible > div > span': {
            backgroundColor: isDesktop
              ? LIGHT_PALETTE.blue.main
              : LIGHT_PALETTE.grey.light,
          },
          '&.Mui-focusVisible, &:hover': {
            backgroundColor: 'transparent',
          },
        }}
        onClick={onClick}
      >
        <ListItemText
          primary={
            <Typography variant={isDesktop ? 'h6' : 'h4'} component="span">
              {label}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  )
}

export default NavItem
