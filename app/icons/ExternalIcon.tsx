'use client'
import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import styles from './ExternalIcon.module.css'

const ExternalIcon = ({ className }: { className?: string }) => {
  return (
    <OpenInNewIcon
      aria-label="open in a new tab"
      className={`${styles.externalIcon} ${className}`}
    />
  )
}

export default ExternalIcon
