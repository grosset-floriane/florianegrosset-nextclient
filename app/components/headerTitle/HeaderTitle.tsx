import React from 'react'
import { Typography, Box, BoxProps } from '@mui/material'
import Logo from './Logo'
import { LIGHT_PALETTE } from '@/app/contants/theme'
import Link from 'next/link'
import styles from './HeaderTitle.module.css'

const HeaderTitle = ({
  isOneLine = false,
  isOnPrimary = false,
}: {
  isOneLine?: boolean
  isOnPrimary?: boolean
}) => {
  return (
    <Link
      href="/"
      aria-label="Home page Floriane Grosset"
      className={`${styles.link} ${isOnPrimary ? styles.onPrimary : ''}`}
    >
      <Box
        sx={{
          display: 'flex',
          '&:hover, &:focus-visible': {
            backgroundColor: LIGHT_PALETTE.blue.main,
          },
        }}
      >
        <Logo width={isOneLine ? 19 : 40} />
        <Typography
          variant="h6"
          color="black"
          component="p"
          sx={{
            ml: isOneLine ? 1 : 2,
            position: 'relative',
            top: isOneLine ? 0 : -2,
            textTransform: isOneLine ? 'uppercase' : 'initial',
            lineHeight: 1.1,
          }}
        >
          <span aria-label="Floriane Grosset">
            Florian(e){' '}
            {!isOneLine && (
              <>
                <br /> —{' '}
              </>
            )}
            Grosset
          </span>
        </Typography>
      </Box>
    </Link>
  )
}

export default HeaderTitle
