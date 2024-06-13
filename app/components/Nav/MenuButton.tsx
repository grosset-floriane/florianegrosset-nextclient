import React from 'react'
import MenuIcon from '@/app/icons/MenuIcon'
import IconButton from '@mui/material/IconButton'

interface Props {
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
}

const MenuButton: React.FC<Props> = ({ setIsOpen, isOpen }) => {
  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="open menu"
        aria-expanded="false"
        aria-controls="menu"
        sx={{
          ml: 'auto',
          borderRadius: 0,
          '&:hover': { bgcolor: 'transparent' },
          '&:focus-visible': {
            bgcolor: 'primary.main',
            borderRadius: 0,
          },
          padding: '0 11px',
          position: 'relative',
          top: '-1px',
        }}
        onClick={() => setIsOpen(!isOpen)}
        disableFocusRipple
      >
        <MenuIcon
          sx={{
            fontSize: 34,
            '&:hover': { bgcolor: 'primary.main' },
          }}
        />
      </IconButton>
    </>
  )
}

export default MenuButton
