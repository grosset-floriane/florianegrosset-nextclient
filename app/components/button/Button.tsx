import React, { ReactNode } from 'react'
import { Typography } from '@mui/material'
import ExternalIcon from '@/app/icons/ExternalIcon'
import { LIGHT_PALETTE } from '@/app/contants/theme'
import styles from './Button.module.css'

interface Props {
  isLink?: boolean
  href?: string
  onClick?: () => void
  children: ReactNode
  isExternal?: boolean
}

const Button = ({
  isLink = false,
  href,
  onClick,
  children,
  isExternal = false,
}: Props) => {
  return (
    <Typography
      className={`${styles.container} ${isExternal ? styles.external : ''}`}
      sx={{
        color: LIGHT_PALETTE.black.dark,
        bgcolor: LIGHT_PALETTE.blue.main,
        '&:hover, &:focus-visible, &:active': {
          outline: `2px solid ${LIGHT_PALETTE.black.dark}`,
        },
      }}
      component={isLink ? 'a' : 'button'}
      {...(isLink ? { href } : { onClick })}
      {...(isExternal && { target: '_BLANK' })}
    >
      {children}
      {isExternal && <ExternalIcon size={18} />}
    </Typography>
  )
}

export default Button
