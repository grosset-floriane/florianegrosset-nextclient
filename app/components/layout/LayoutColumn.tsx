import React, { FC } from 'react'
import { Box, Grid } from '@mui/material'

interface StickyElementProps {
  stickyTopPosition: number
  children: any
}

const StickyElement: FC<StickyElementProps> = ({
  children,
  stickyTopPosition,
}) => {
  return (
    <Box
      sx={{
        position: 'initial',
        top: stickyTopPosition,
        maxWidth: 450,
        '@media (min-width: 1200px)': {
          position: 'sticky',
        },
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
  const columnContent = isSticky ? (
    <StickyElement stickyTopPosition={stickyTopPosition}>
      {children}
    </StickyElement>
  ) : (
    children
  )

  return (
    <>
      <Grid
        item
        xs={12}
        lg={isSticky ? 5 : 7}
        sx={{
          '@media (min-width: 1200px)': {
            mt: marginTop,
          },
        }}
      >
        {columnContent}
      </Grid>
    </>
  )
}

export default LayoutColumn
