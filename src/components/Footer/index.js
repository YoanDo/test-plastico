import React from 'react'

import Social from '../Social'
import SurfRiderLink from './components/SurfRiderLink'
import { FooterWrapper, SocialWrapper } from './styles'
import Navigation from '../Navigation'

const Footer = () => (
  <FooterWrapper>
    <SurfRiderLink />
    <Navigation column align="flex-start" />
    <SocialWrapper>
      <p>Follow us</p>
      <Social />
    </SocialWrapper>
  </FooterWrapper>
)

export default Footer
