import { Typography } from '@mui/material'
import Link from './components/link/Link'
import LayoutColumn from './components/layout/LayoutColumn'
import MainTitle from './components/mainTitle/MainTitle'
import { SITE_TAGELINE } from './contants/navLinks'
import type { Metadata } from 'next'

export default function IndexPage() {
  return (
    <>
      <LayoutColumn isSticky stickyTopPosition={70}>
        <MainTitle title="About" description={SITE_TAGELINE} lang="fr">
          Bonjour !
        </MainTitle>
        <Typography variant="caption" mb={6}>
          {SITE_TAGELINE}
        </Typography>
      </LayoutColumn>
      <LayoutColumn marginTop={40}>
        <Typography mb={3}>
          I am originally French, and now living in Hamburg, Germany.
        </Typography>

        <Typography mb={3}>
          I am the founder of{' '}
          <Link href="https://waawgallery.com" isExternal>
            <span aria-label="waaw">WAAW</span>, a non-profit online gallery
          </Link>
          . We aim to promote and help the creation of quality web-based
          artworks.
        </Typography>
        <Typography mb={3}>
          From February 2022 to July 2023, I was working as a frontend engineer
          at{' '}
          <Link href="https://getground.co.uk" isExternal>
            GetGround
          </Link>
          .
        </Typography>
        <Typography mb={3}>
          I love working with Javascript, React, Redux and Typescript, while
          caring for semantic HTML, accessibility, and good user experience.
        </Typography>
      </LayoutColumn>
    </>
  )
}

export const metadata: Metadata = {
  description: SITE_TAGELINE,
}
