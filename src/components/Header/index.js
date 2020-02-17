import React from 'react'

import Breaker from '../Breaker'
import KeyDatas from './components/KeyDatas'
import { Banner, Title } from './styles'

const Header = () => (
  <Banner>
    <Title>Plastic Origins</Title>
    <Breaker />
    <KeyDatas />
  </Banner>
)

export default Header
