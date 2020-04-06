import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Breaker from '../Breaker'
import KeyDatas from './components/KeyDatas'
import { Banner, Title, MobileBanner } from './styles'

import Ribbon from '../Ribbon'

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })

  return (
    <Banner>
      <MobileBanner>
        {isTabletOrMobile && <Ribbon right="20px" top="-28px" left="auto" />}
        <Title>Plastic Origins</Title>
      </MobileBanner>
      <Breaker />
      <KeyDatas />
    </Banner>
  )
}

export default Header
