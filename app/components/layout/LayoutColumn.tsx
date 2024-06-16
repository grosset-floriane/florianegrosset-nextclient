'use client'
import React, { FC } from 'react'
import { Box, Grid } from '@mui/material'
import useMediaQuery from '@/app/hooks/useMediaQuery'

interface StickyElementProps {
  stickyTopPosition: number
  isDesktop: boolean
  children: any
}

const StickyElement: FC<StickyElementProps> = ({
  children,
  stickyTopPosition,
  isDesktop,
}) => {
  return (
    <Box
      sx={{
        position: isDesktop ? 'sticky' : 'initial',
        top: stickyTopPosition,
        maxWidth: 450,
      }}
    >
      {children}
    </Box>
  )
}

interface LayoutColumnProps {
  stickyTopPosition?: number
  isSticky?: boolean
  marginTop?: number
  children: any
}

const LayoutColumn: FC<LayoutColumnProps> = ({
  children,
  stickyTopPosition = 45,
  isSticky = false,
  marginTop = 0,
}) => {
  const { isDesktop } = useMediaQuery()
  const columnContent = isSticky ? (
    <StickyElement stickyTopPosition={stickyTopPosition} isDesktop={isDesktop}>
      {children}
    </StickyElement>
  ) : (
    children
  )

  return (
    <>
      <Grid item xs={12} lg={isSticky ? 5 : 7} mt={isDesktop ? marginTop : 0}>
        {columnContent}
      </Grid>
    </>
  )
}

export default LayoutColumn
