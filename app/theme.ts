'use client'
import { Lekton, Open_Sans } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { LIGHT_PALETTE } from './contants/theme'

const lekton = Lekton({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const open_sans = Open_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: LIGHT_PALETTE.blue.main,
    },
    secondary: {
      main: LIGHT_PALETTE.sand.main,
    },
    action: {
      active: LIGHT_PALETTE.black.main,
    },
    background: {
      default: LIGHT_PALETTE.grey.light,
      paper: LIGHT_PALETTE.grey.light,
    },
    error: {
      main: LIGHT_PALETTE.red.main,
    },
    success: {
      main: LIGHT_PALETTE.green.main,
    },
    warning: {
      main: LIGHT_PALETTE.orange.main,
    },
    info: {
      main: LIGHT_PALETTE.blue.main,
    },
  },
  typography: {
    fontFamily: open_sans.style.fontFamily,
    fontSize: 20,
    h1: {
      fontFamily: lekton.style.fontFamily,
      fontSize: 64,
      letterSpacing: '-.05rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: lekton.style.fontFamily,
      fontSize: 64,
      letterSpacing: '-.05rem',
    },
    h3: {
      fontFamily: lekton.style.fontFamily,
      fontSize: 51,
    },
    h4: {
      fontFamily: lekton.style.fontFamily,
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: '.1rem',
    },
    h5: {
      fontFamily: lekton.style.fontFamily,
      fontSize: 28,
      fontWeight: 700,
    },
    h6: {
      fontFamily: lekton.style.fontFamily,
      fontSize: 23,
      fontWeight: 700,
      letterSpacing: '.015rem',
      lineHeight: 'normal',
    },
    body1: {
      fontWeight: 300,
      letterSpacing: '.01rem',
    },
    body2: {
      fontWeight: 400,
      letterSpacing: '.01rem',
    },
    caption: {
      fontFamily: lekton.style.fontFamily,
      fontWeight: 700,
      letterSpacing: '.1rem',
      fontSize: 24,
      marginBottom: 32,
    },
    subtitle1: {
      fontSize: 15,
      fontFamily: open_sans.style.fontFamily,
      letterSpacing: '.01rem',
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
})

theme.typography.h1 = {
  fontFamily: lekton.style.fontFamily,
  letterSpacing: '-0.15rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
    fontWeight: 400,
  },
}

export default theme
