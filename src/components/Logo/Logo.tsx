import React from 'react'
import styled from 'styled-components'
import logo from 'assets/images/logo.png'
import { Typography, useTheme } from '@mui/material'
import { tokens } from 'context/theme.context'

export type LogoProps = {}

const LogoStyle = styled.img`
  height: 30px;
  margin-right: 10px;
`
const Title = styled(Typography)`
  font-family: 'Kanit', sans-serif;
  color: ${(props: any) => (props.color ? props.color : '')};
  letter-spacing: 0.3mm;
`

const Logo: React.FC<LogoProps> = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <>
      <LogoStyle src={logo} />
      <Title variant="h4" color={colors.grey[500]}>
        VAPES PA GEIS
      </Title>
    </>
  )
}

export default Logo
