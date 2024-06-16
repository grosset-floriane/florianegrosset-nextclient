'use client'
import React from 'react'
import Button from './Button'
import { copyText } from '../../utils/functions'

interface Props {
  text: string
  label: string
}

const CopyButton: React.FC<Props> = ({ text, label }) => {
  return <Button onClick={() => copyText(text)}>{label}</Button>
}

export default CopyButton
