import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import { LIGHT_PALETTE } from '@/app/contants/theme'
import StyledLayout from './StyledLayout'

interface Props {
  readonly children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: LIGHT_PALETTE.grey.light,
      }}
    >
      <StyledLayout container component="main">
        {children}
      </StyledLayout>
    </Box>
  )
}

export default Layout
