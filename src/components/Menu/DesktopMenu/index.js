import React from 'react'

import { MenuWrapper, RightWrapper, SocialWrapper } from './styles'
// import Button from '../../Button'
import Social from '../../Social'
import NavigationLinks from '../../Navigation'
import User from './components/User'

import Ribbon from '../../Ribbon'

const Menu = () => (
  <MenuWrapper>
    <Ribbon />
    <NavigationLinks />
    <RightWrapper>
      <SocialWrapper>
        <Social />
      </SocialWrapper>
      {/* <Button label="download_app" /> */}
      <User />
    </RightWrapper>
  </MenuWrapper>
)

export default Menu
