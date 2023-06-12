import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, useTheme } from '@mui/material'
import { Logo } from 'components/Logo'
import { ThemeToggle } from 'components/ThemeToggle'
import { tokens } from 'context/theme.context'
import { routesTypes } from 'models'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {
  ItemsResponsiveCont,
  LogoContainer,
  NavBarStyle,
  NavbarItem,
  NavbarItemsCont,
} from './styledComponents/NavBar'
import { Cart } from 'components/Cart'

export type NavBarProps = {}

const NavBar: React.FC<NavBarProps> = () => {
  const [open, setOpen] = useState<boolean>(false)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const themeNavBarItem = {
    main: `${colors.grey[800]}, 0.157)`,
    light: colors.blueAccent[600],
  }

  const handleOpenMenu = () => setOpen((prevOpen) => !prevOpen)

  return (
    <NavBarStyle color={colors.grey[800]}>
      <div className="container">
        <LogoContainer color={colors.grey[700]}>
          <Logo />
        </LogoContainer>
        <NavbarItemsCont>
          <ThemeProvider theme={themeNavBarItem}>
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
                  Tienda
                </NavLink>
              </NavbarItem>

              <ThemeToggle />
            </ItemsResponsiveCont>
          </ThemeProvider>
          <IconButton
            onClick={handleOpenMenu}
            className="icon-menu"
            style={{ zIndex: 3000 }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Cart />
        </NavbarItemsCont>
      </div>
    </NavBarStyle>
  )
}

export default NavBar
