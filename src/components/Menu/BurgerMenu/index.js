import { scaleDown as Menu } from 'react-burger-menu'
import MediaQuery from 'react-responsive'
import { string } from 'prop-types'
import React, { useState } from 'react'

import styles from './styles'
import Social from '../../Social'
import NavigationLinks from '../../Navigation'

const BurgerMenu = ({ pageWrapId }) => {
  const [isOpen, setIsOpen] = useState(false)

  const isMenuOpen = function (state) {
    setIsOpen(state.isOpen)
  }

  return (
    <MediaQuery maxDeviceWidth={900}>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Menu styles={styles} pageWrapId={pageWrapId} isOpen={isOpen} onStateChange={isMenuOpen}>
        <NavigationLinks burger closePanel={() => setIsOpen(false)} />
        <Social />
      </Menu>
    </MediaQuery>
  )
}

BurgerMenu.propTypes = {
  pageWrapId: string,
}

BurgerMenu.defaultProps = {
  pageWrapId: null,
}

export default BurgerMenu
