import React from 'react'

import { MenuWrapper, RightWrapper, SocialWrapper, Wrapper } from './styles'
import Button from '../../UI/Button'
import Social from '../../Social'
import NavigationLinks from '../../Navigation'
// import User from './components/User'

import Ribbon from '../../Ribbon'
import { func } from 'prop-types'

const Menu = ({ openDownloadAppModal }) => (
  <Wrapper>
    <MenuWrapper>
      <Ribbon />
      <NavigationLinks />
      <RightWrapper>
        <SocialWrapper>
          <Social />
        </SocialWrapper>
        <Button label="download_app" onClick={openDownloadAppModal} />
        {/* <a href="/sign-in">
          <User /> */}
        {/* //todo : switch to link & check auth */}
        {/* </a> */}
      </RightWrapper>
    </MenuWrapper>
  </Wrapper>
)
Menu.propTypes = {
  openDownloadAppModal: func,
}

Menu.defaultProps = {
  openDownloadAppModal: Function.prototype,
}

export default Menu
