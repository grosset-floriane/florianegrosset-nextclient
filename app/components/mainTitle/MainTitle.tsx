import React from 'react'
import { Typography } from '@mui/material'

const MainTitle = ({
  title,
  description,
  children,
  ...props
}: {
  title?: string
  description: string
  children: string
  lang?: string
}) => {
  return (
    <>
      <Typography
        variant="h1"
        mb={3}
        mt={2}
        sx={{
          textAlign: 'center',
          '@media (min-width: 600px)': {
            textAlign: 'left',
          },
        }}
        {...props}
      >
        {children}
      </Typography>
    </>
  )
}

export default MainTitle
