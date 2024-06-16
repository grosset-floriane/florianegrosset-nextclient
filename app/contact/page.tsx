import * as React from 'react'
import Typography from '@mui/material/Typography'
import LayoutColumn from '../components/layout/LayoutColumn'
import MainTitle from '../components/mainTitle/MainTitle'

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
        <Typography component="span">contact@florianegrosset.com</Typography>
      </Typography>
      {/* <ActionsContainer>
        <Button href={`mailto:${email}`} isLink isExternal>
          open mail box
        </Button>
      </ActionsContainer> */}

      <Typography variant="h5" component="h3" mt={5}>
        On social networks
      </Typography>
      {/* <ActionsContainer>
        {SOCIAL_MEDIA.map(({ label, link }) => (
          <li key={label} style={{ listStyle: 'none' }}>
            <Button href={link} isLink isExternal>
              {label}
            </Button>
          </li>
        ))}
      </ActionsContainer> */}
    </LayoutColumn>
  )
}
