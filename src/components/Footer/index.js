import React from 'react'

import Social from '../Social'
import SurfRiderLink from './components/SurfRiderLink'
import { FooterWrapper, SocialWrapper } from './styles'

const Footer = () => (
  <FooterWrapper>
    <SurfRiderLink />
    <SocialWrapper>
      <p>Follow us</p>
      <Social />
    </SocialWrapper>
  </FooterWrapper>
)

export default Footer
