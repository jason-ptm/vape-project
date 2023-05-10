import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

export type StoreProps = {}

const Store: React.FC<StoreProps> = () => {
  return (
    <StoreStyle>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </StoreStyle>
  )
}

export const StoreStyle = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
`

export default Store
