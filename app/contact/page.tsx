import * as React from 'react'
import Typography from '@mui/material/Typography'
import { Metadata } from 'next'
import LayoutColumn from '../components/layout/LayoutColumn'
import MainTitle from '../components/mainTitle/MainTitle'
import Button from '../components/button/Button'
import ActionsContainer from '../components/actionContainer/ActionContainer'
import { EMAIL } from '../contants/navLinks'
import { copyText } from '../utils/functions'
import CopyButton from '../components/button/CopyButton'

const SOCIAL_MEDIA = [
  {
    label: 'LinkedIn Profile',
    link: 'https://www.linkedin.com/in/floriane-grosset-426435212/?locale=en_US',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/grosset-floriane',
  },
]

export default function About() {
  return (
    <LayoutColumn marginTop={0}>
      <MainTitle description="Floriane's contact information">
        Contact
      </MainTitle>
      <Typography variant="caption" mb={1}>
        The easiest way to contact me is by email. Don’t hesitate to drop me a
        line to say hi!
        <br />
        <Typography component="span">{EMAIL}</Typography>
      </Typography>
      <ActionsContainer>
        <CopyButton text={EMAIL} label="copy email" />
        <Button href={`mailto:${EMAIL}`} isLink isExternal>
          open mail box
        </Button>
      </ActionsContainer>
      <Typography variant="h5" component="h3" mt={5}>
        On social networks
      </Typography>
      <ActionsContainer>
        {SOCIAL_MEDIA.map(({ label, link }) => (
          <li key={label} style={{ listStyle: 'none' }}>
            <Button href={link} isLink isExternal>
              {label}
            </Button>
          </li>
        ))}
      </ActionsContainer>
    </LayoutColumn>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Find out how to reach out. Don't hesitate to drop me a line, I am happy to have a chat!",
}
