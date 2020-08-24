import React from 'react'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

import { func, bool, string } from 'prop-types'
import { Links } from './styles'

const NavigationLinks = ({ align, closePanel, column, burger }) => (
  <Links column={column} burger={burger} align={align} onClick={() => closePanel()}>
    <Link href={{ pathname: '/' }}>
      <span>Plastic origins</span>
    </Link>
    <Link href={{ pathname: '/', query: { target: 'project' } }}>
      <span>
        <FormattedMessage id="our_project" />
      </span>
    </Link>
    <Link href={{ pathname: '/', query: { target: 'getInvolved' } }}>
      <span>
        <FormattedMessage id="contribute" />
      </span>
    </Link>
    {/* <Link href="/data">
      <span>Data</span>
    </Link>
    <span>About us</span> */}
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
