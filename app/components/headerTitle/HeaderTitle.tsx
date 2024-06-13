import React from 'react'
import { Typography, Box, BoxProps } from '@mui/material'
import Logo from './Logo'
import { LIGHT_PALETTE } from '@/app/contants/theme'

const HeaderTitle = ({ isOneLine = false }: { isOneLine?: boolean }) => {
  return (
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
  )
}

export default HeaderTitle
