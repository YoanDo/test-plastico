import React from 'react'
import Link from 'next/link'

import { func } from 'prop-types'

import { Links } from './styles'

const NavigationLinks = ({ closePanel }) => (
  <Links onClick={() => closePanel()}>
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
}

NavigationLinks.defaultProps = {
  closePanel: null,
}

export default NavigationLinks
