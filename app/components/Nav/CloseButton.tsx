import React from 'react'
import { ListItemButton, ListItem, ListItemIcon, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import styles from './NavItem.module.css'
import { LIGHT_PALETTE } from '@/app/contants/theme'

interface Props {
  setIsOpen: (isOpen: boolean) => void
}

const CloseButton: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <ListItem disablePadding className={styles.listItem}>
      <ListItemButton
        onClick={() => setIsOpen(false)}
        disableRipple
        className={styles.link}
        aria-label="close navigation"
        aria-expanded="true"
        aria-controls="menu"
        sx={{
          '&.Mui-focusVisible, &:hover': {
            backgroundColor: 'transparent',
          },
          '&:hover svg, &:focus-visible svg': {
            backgroundColor: LIGHT_PALETTE.grey.light,
          },
        }}
      >
        <ListItemIcon>
          <CloseIcon color="action" />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  )
}

export default CloseButton
