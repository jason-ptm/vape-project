import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { NavBar } from './components/NavBar'
import { useTheme } from '@mui/material'
import { tokens } from 'context/theme.context'
import { routesTypes } from 'models'

export type StoreProps = {}

const StoreStyle = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) => (props.color ? props.color : '')};
`

const Store: React.FC<StoreProps> = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <StoreStyle color={colors.grey[900]}>
      <NavBar />
      <Routes>
        <Route path={routesTypes.HOME} element={<h1>Home</h1>} />
        <Route path={routesTypes.STORE} element={<h1>Store</h1>} />
        <Route path={routesTypes.CART} element={<h1>Cart</h1>} />
      </Routes>
    </StoreStyle>
  )
}

export default Store
