import React, { ReactNode } from 'react'
import { BackgroundColor } from '@/app/types/styles'
import NextLink from 'next/link'
import styles from './Link.module.css'
import ExternalIcon from '@/app/icons/ExternalIcon'

interface Props {
  href: string
  children: ReactNode
  isExternal?: boolean
  backgroundColor?: BackgroundColor
  isActive?: boolean
}

const Link = ({
  href,
  children,
  isExternal = false,
  backgroundColor = 'default',
  isActive = false,
}: Props) => {
  return (
    <>
      <NextLink
        href={href}
        target={isExternal ? '_BLANK' : ''}
        className={`${styles.link} ${isActive && styles.active} ${
          backgroundColor === 'default' ? styles.onDefault : styles.onPrimary
        }`}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
        {isExternal && <ExternalIcon />}
      </NextLink>
    </>
  )
}

export default Link
