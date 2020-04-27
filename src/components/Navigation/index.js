import React from 'react'
import Link from 'next/link'

import { func, bool, string } from 'prop-types'

import { Links } from './styles'

const NavigationLinks = ({ align, closePanel, column, burger }) => (
  <Links column={column} burger={burger} align={align} onClick={() => closePanel()}>
    <Link href={{ pathname: '/', query: { target: 'project' } }}>
      <span>The project</span>
    </Link>
    <Link href={{ pathname: '/', query: { target: 'getInvolved' } }}>
      <span>Contribute</span>
    </Link>
    <Link href="/data">
      <span>Data</span>
    </Link>
    <span>About us</span>
  </Links>
)

NavigationLinks.propTypes = {
  closePanel: func,
  column: bool,
  burger: bool,
  align: string,
}

NavigationLinks.defaultProps = {
  align: 'center',
  closePanel: Function.prototype,
  column: false,
  burger: false,
}

export default NavigationLinks
