import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton, useTheme } from '@mui/material'
import { ColorModeContext } from 'context/theme.context'
import React, { useContext } from 'react'

export type ThemeToggleProps = {}

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <>
      {
        <IconButton
          onClick={colorMode.toggleColorMode}
          style={{ margin: '5px' }}
        >
          {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      }{' '}
    </>
  )
}

export default ThemeToggle
