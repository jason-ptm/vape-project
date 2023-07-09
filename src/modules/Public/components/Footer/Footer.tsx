import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { IconButton, useTheme } from '@mui/material'
import { Logo } from 'components/Logo'
import { tokens } from 'context/theme.context'
import { socialLinks } from 'models'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  BackgroundContainer,
  EmailCont,
  IconsCont,
  Main,
  Text,
} from './styledComponents/Footer.styled'

export type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <FooterStyle>
      <BackgroundContainer bgcolor={colors.blueAccent[600]}>
        <div className="container">
          <Main>
            <Logo color={'#dddddd'} />
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis molestias esse vel libero magnam? Similique laudantium
            </Text>
            <EmailCont>
              <EmailIcon /> {socialLinks.EMAIL}
            </EmailCont>
            <IconsCont>
              <IconButton
                href={socialLinks.FACEBOOK}
                target="__blank"
                style={{ color: '#ddd' }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton
                href={socialLinks.INSTAGRAM}
                target="__blank"
                style={{ color: '#ddd' }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
            </IconsCont>
          </Main>
        </div>
      </BackgroundContainer>
      <BackgroundContainer
        bgcolor={
          theme.palette.mode === 'dark'
            ? colors.blueAccent[700]
            : colors.blueAccent[400]
        }
      >
        <div className="container">
          <Main>
            <Text color="#ddd">
              CopyRight &copy;2023 Vapex. Diseñado por{' '}
              <span>
                <Link to={socialLinks.LINKEDIN} target="__blank">
                  Jason Solarte
                </Link>
              </span>
            </Text>
          </Main>
        </div>
      </BackgroundContainer>
    </FooterStyle>
  )
}

export const FooterStyle = styled.div``

export default Footer
