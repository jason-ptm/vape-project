import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, useTheme } from '@mui/material'
import { Cart } from 'components/Cart'
import { Logo } from 'components/Logo'
import { ThemeToggle } from 'components/ThemeToggle'
import { tokens } from 'context/theme.context'
import { routesTypes } from 'models'
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {
  ItemsResponsiveCont,
  NavBarStyle,
  NavbarItem,
  NavbarItemsCont,
} from './styledComponents/NavBar.styled'

export type NavBarProps = {}

const NavBar: React.FC<NavBarProps> = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [scroll, setScroll] = useState({
    scrollTop: 0,
    scrollFlag: 0,
    hide: false,
  })
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const location = useLocation()

  const themeNavBarItem = {
    main: `${colors.grey[800]}, 0.157)`,
    light: colors.blueAccent[600],
    background: `${colors.grey[800]}, 0.51)`,
  }

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    const handlerScroll = () => {
      const coordY = Math.floor(window.scrollY)

      if (coordY < scroll.scrollTop) {
        setScroll((prevScroll) => ({
          ...prevScroll,
          scrollTop: coordY,
          hide: false,
        }))
      } else if (coordY > scroll.scrollTop + 10) {
        setScroll({
          scrollTop: coordY,
          scrollFlag: coordY,
          hide: open ? false : true,
        })
      }
    }

    window.addEventListener('scroll', handlerScroll)

    return () => window.removeEventListener('scroll', handlerScroll)
  }, [scroll])

  useEffect(() => {
    const handlerResize = () => {
      const width = window.innerWidth
      if (width < 550) setOpen(false)
    }

    window.addEventListener('resize', handlerResize)

    return () => window.removeEventListener('resize', handlerResize)
  }, [])

  const handleOpenMenu = () => setOpen((prevOpen) => !prevOpen)

  return (
    <ThemeProvider theme={themeNavBarItem}>
      <NavBarStyle hide={`${scroll.hide}`}>
        <div className="container">
          <Logo />

          <NavbarItemsCont>
            <ItemsResponsiveCont
              color={colors.grey[800]}
              className={open ? 'open' : ''}
            >
              <NavbarItem>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to={routesTypes.HOME}
                >
                  Inicio
                </NavLink>
              </NavbarItem>

              <NavbarItem>
                <NavLink
                  to={routesTypes.STORE}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Productos
                </NavLink>
              </NavbarItem>

              <ThemeToggle />
            </ItemsResponsiveCont>

            <IconButton onClick={handleOpenMenu} className="icon-menu">
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Cart />
          </NavbarItemsCont>
        </div>
      </NavBarStyle>
    </ThemeProvider>
  )
}

export default NavBar
