import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material'
import { Theme } from 'models'

export const tokens = (mode: Theme) => {
  if (mode === 'dark') {
    return {
      grey: {
        100: '#e0e0e0',
        200: '#c2c2c2',
        300: '#a3a3a3',
        400: '#858585',
        500: '#666666',
        600: '#525252',
        700: '#3d3d3d',
        800: 'rgba(41, 41, 41',
        900: '#141414',
      },
      primary: {
        100: '#d0d1d5',
        200: '#a1a4ab',
        300: '#727681',
        400: '#1F2A40',
        500: '#141b2d',
        600: '#101624',
        700: '#0c101b',
        800: '#080b12',
        900: '#040509',
      },
      greenAccent: {
        100: '#dbf5ee',
        200: '#b7ebde',
        300: '#94e2cd',
        400: '#70d8bd',
        500: '#4cceac',
        600: '#3da58a',
        700: '#2e7c67',
        800: '#1e5245',
        900: '#0f2922',
      },
      redAccent: {
        100: '#f8dcdb',
        200: '#f1b9b7',
        300: '#e99592',
        400: '#e2726e',
        500: '#db4f4a',
        600: '#af3f3b',
        700: '#832f2c',
        800: '#58201e',
        900: '#2c100f',
      },
      blueAccent: {
        100: '#eadef9',
        200: '#d5bdf3',
        300: '#bf9bed',
        400: '#aa7ae7',
        500: '#9559e1',
        600: '#7747b4',
        700: '#593587',
        800: '#3c245a',
        900: '#1e122d',
      },
    }
  }
  return {
    grey: {
      100: '#141414',
      200: '#292929',
      300: '#3d3d3d',
      400: '#525252',
      500: '#666666',
      600: '#858585',
      700: '#a3a3a3',
      800: 'rgba(194, 194, 194',
      900: '#e0e0e0',
    },
    primary: {
      100: '#040509',
      200: '#080b12',
      300: '#0c101b',
      400: '#f2f0f0', // manually changed
      500: '#141b2d',
      600: '#1F2A40',
      700: '#727681',
      800: '#a1a4ab',
      900: '#d0d1d5',
    },
    greenAccent: {
      100: '#0f2922',
      200: '#1e5245',
      300: '#2e7c67',
      400: '#3da58a',
      500: '#4cceac',
      600: '#70d8bd',
      700: '#94e2cd',
      800: '#b7ebde',
      900: '#dbf5ee',
    },
    redAccent: {
      100: '#2c100f',
      200: '#58201e',
      300: '#832f2c',
      400: '#af3f3b',
      500: '#db4f4a',
      600: '#e2726e',
      700: '#e99592',
      800: '#f1b9b7',
      900: '#f8dcdb',
    },
    blueAccent: {
      100: '#1e122d',
      200: '#3c245a',
      300: '#593587',
      400: '#7747b4',
      500: '#9559e1',
      600: '#aa7ae7',
      700: '#bf9bed',
      800: '#d5bdf3',
      900: '#eadef9',
    },
  }
}

const MuiThemes = (mode: Theme) => {
  const colors = tokens(mode)
  if (mode === 'dark') {
    return {
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.greenAccent[500],
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
      background: {
        default: colors.primary[500],
      },
    }
  }
  return {
    primary: {
      main: colors.primary[100],
    },
    secondary: {
      main: colors.greenAccent[500],
    },
    neutral: {
      dark: colors.grey[700],
      main: colors.grey[500],
      light: colors.grey[100],
    },
    background: {
      default: '#fcfcfc',
    },
  }
}

// mui theme settings
export const themeSettings = (mode: Theme) => {
  return {
    palette: {
      mode: mode,
      ...MuiThemes(mode),
    },
    typography: {
      fontFamily: ['Titillium Web', 'sans - serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Titillium Web', 'sans - serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Titillium Web', 'sans - serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Titillium Web', 'sans - serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Titillium Web', 'sans - serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Titillium Web', 'sans - serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Titillium Web', 'sans - serif'].join(','),
        fontSize: 14,
      },
    },
  }
}

export const ColorModeContext = createContext({
  toggleColorMode: () => { },
})

export const useMode = () => {
  const [mode, setMode] = useState<Theme>('light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev: Theme) => (prev == 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return {
    theme: theme,
    colorMode: colorMode,
  }
}
