import { useTheme } from '@mui/material'
import logo from 'assets/images/logo.png'
import { tokens } from 'context/theme.context'
import React from 'react'
import styled from 'styled-components'

export type LogoProps = {
  color?: string
}

const LogoStyle = styled.img`
  height: 30px;
`
const Title = styled.p`
  font-family: 'Slackside One', cursive;
  font-size: 2.2rem;
  text-transform: uppercase;
  vertical-align: middle;
  color: ${(props: any) => (props.color ? props.color : '')};
  letter-spacing: 0.3mm;
  position: relative;
  top: -3px;
`
const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const Logo: React.FC<LogoProps> = ({ color }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Container>
      <LogoStyle src={logo} />
      <Title color={color ? color : colors.blueAccent[600]}>vapex</Title>
    </Container>
  )
}

export default Logo
