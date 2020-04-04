import React from 'react'

import Breaker from '../Breaker'
import KeyDatas from './components/KeyDatas'
import { Banner, Title, MobileBanner } from './styles'

const Header = () => (
  <Banner>
    <MobileBanner>
      <Title>Plastic Origins</Title>
    </MobileBanner>
    <Breaker />
    <KeyDatas />
  </Banner>
)

export default Header
