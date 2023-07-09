import { useTheme } from '@mui/material'
import { tokens } from 'context/theme.context'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  HomeStyle
} from './styledComponents/Home.styled'

export type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const provider = {
    background: colors.primary[800],
    colorResalt: colors.blueAccent[400],
    slideBackground: colors.redAccent[400],
    bgBtn: colors.blueAccent[500],
    bgBtnHoverFilled: `${colors.blueAccent[400]}d2`,
    bgBtnHover: `${colors.blueAccent[500]}28`,
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HomeStyle>
      <ThemeProvider theme={provider}>
        
      </ThemeProvider>
    </HomeStyle>
  )
}

export default Home
