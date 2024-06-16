'use client'
import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import styles from './ExternalIcon.module.css'

const ExternalIcon = ({
  className,
  size = 24,
}: {
  className?: string
  size?: number
}) => {
  return (
    <OpenInNewIcon
      aria-label="open in a new tab"
      sx={{ width: size, height: size }}
      className={`${styles.externalIcon} ${className}`}
    />
  )
}

export default ExternalIcon
