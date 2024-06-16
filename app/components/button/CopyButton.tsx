'use client'
import React from 'react'
import Button from './Button'
import { copyText } from '../../utils/functions'
import { useAppDispatch } from '@/lib/hooks'
import { setSuccessNotification } from '@/lib/features/notification/notificationSlice'

interface Props {
  text: string
  label: string
}

const CopyButton: React.FC<Props> = ({ text, label }) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    copyText(text)
    dispatch(setSuccessNotification('Copied!'))
  }
  return <Button onClick={handleClick}>{label}</Button>
}

export default CopyButton
