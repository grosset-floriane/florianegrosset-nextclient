import React from 'react'
import { Box } from '@mui/material'
import styles from './ActionContainer.module.css'

type Container = {
  children: any
}

const ActionsContainer: React.FC<Container> = ({ children }) => {
  return (
    <Box component="ul" className={styles.container}>
      {children}
    </Box>
  )
}

export default ActionsContainer
