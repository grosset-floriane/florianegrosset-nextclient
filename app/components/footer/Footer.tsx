'use client'
import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import StyledLayout from '../layout/StyledLayout'
import HeaderTitle from '../headerTitle/HeaderTitle'
import Link from '../link/Link'
import { NAV_LINKS } from '@/app/contants/navLinks'
import styles from './Footer.module.css'
import { LIGHT_PALETTE } from '@/app/contants/theme'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

  return (
    <Container
      component="footer"
      className={styles.container}
      sx={{ backgroundColor: LIGHT_PALETTE.blue.main }}
    >
      <StyledLayout container columnSpacing={4}>
        <Grid item xs={12} sm={8} lg={6} className={styles.gridItem}>
          <HeaderTitle isOneLine isOnPrimary />
          <Typography variant="body2">
            I am a web developer passionate about accessibility, sustainability
            and art.
            <br />
            <Link
              href={`mailto:contact@florianegrosset.com`}
              isExternal
              backgroundColor="primary"
            >
              contact@florianegrosset.com
            </Link>
          </Typography>
          <Typography component="h2" variant="h6" mt={3}>
            site map
          </Typography>
          <nav>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ url, label }) => (
                <li key={label} className={styles.listItem}>
                  <Link
                    href={url}
                    backgroundColor="primary"
                    isActive={pathname === url}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Grid>
      </StyledLayout>
    </Container>
  )
}

export default Footer
