import { useMediaQuery as muiUseMediaQuery, useTheme } from '@mui/material'

const useMediaQuery = () => {
  const theme = useTheme()
  const isMobile = muiUseMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = muiUseMediaQuery(theme.breakpoints.up('sm'))
  const isDesktop = muiUseMediaQuery(theme.breakpoints.up('lg'))

  return { isMobile, isTablet, isDesktop }
}

export default useMediaQuery
