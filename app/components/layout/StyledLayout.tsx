'use client'
import { styled, Grid } from '@mui/material'

const StyledLayout = styled(
  Grid,
  {},
)(({ theme }) => ({
  padding: theme.spacing(2, 2, 6),
  marginTop: theme.spacing(9),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5),
    maxWidth: 678,
  },
  [theme.breakpoints.up('lg')]: {
    margin: `${theme.spacing(9)} auto 0`,
    padding: theme.spacing(5),
    maxWidth: 1200,
  },
})) as typeof Grid

export default StyledLayout
