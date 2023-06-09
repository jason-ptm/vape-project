import { useTheme } from '@mui/material'
import { tokens } from 'context/theme.context'
import { routesTypes } from 'models'
import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

const Home = lazy(() => import('./pages/Home/Home'))

export type PublicProps = {}

const PublicStyle = styled.div`
  padding-top: 60px;
  width: 100%;
  background-color: ${(props) => (props.color ? props.color : '')};
`

const Public: React.FC<PublicProps> = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <PublicStyle color={colors.grey[900]}>
      <NavBar />

      <Routes>
        <Route path={routesTypes.HOME} element={<Home />} />
        <Route path={routesTypes.STORE} element={<h1>Store</h1>} />
        <Route path={routesTypes.CART} element={<h1>Cart</h1>} />
      </Routes>

      <Footer />
    </PublicStyle>
  )
}
export default Public
