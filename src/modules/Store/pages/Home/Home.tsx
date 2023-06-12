import React from 'react'
import styled from 'styled-components'

export type HomeProps = {}

export const HomeStyle = styled.div`
  height: 2000px;
`

const Home: React.FC<HomeProps> = () => {
  return <HomeStyle>Home</HomeStyle>
}

export default Home
