import React from 'react'
import Box from '@mui/material/Box'
import Image from 'next/image'

const Logo = ({ width = 40 }: { width?: number }) => {
  return (
    <Box sx={{ width, height: width }}>
      <Image
        alt="logo"
        src="/logos/logo-black.png"
        width={width}
        height={width}
      />
    </Box>
  )
}

export default Logo
