import * as React from 'react'
import Typography from '@mui/material/Typography'

export default function Copyright() {
  return (
    <Typography variant="subtitle1" color="action" sx={{ mt: 2 }}>
      {'Copyright © '}
      Floriane Grosset {new Date().getFullYear()}
    </Typography>
  )
}
