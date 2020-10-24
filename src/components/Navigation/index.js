import React from 'react'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

import { func, bool, string } from 'prop-types'
import { Links } from './styles'

const NavigationLinks = ({ align, burger, closePanel, column, isFooter }) => {
  const isUserFrench =
    typeof window !== 'undefined' &&
    typeof window.navigator !== 'undefined' &&
    navigator.language &&
    navigator.language.split(/[-_]/)[0] === 'fr'
  const conditions = isUserFrench ? 'CGU' : 'GTC'

  return (
    <Links
      column={column}
      burger={burger}
      align={align}
      onClick={() => closePanel()}
    >
      <Link href={{ pathname: '/' }}>
        <span>Plastic Origins</span>
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
      {isFooter && (
        <Link href={{ pathname: `/${conditions}` }}>
          <span>
            <FormattedMessage id={conditions} />
          </span>
        </Link>
      )}
      {/* <Link href="/data">
      <span>Data</span>
    </Link>
    <span>About us</span> */}
    </Links>
  )
}

NavigationLinks.propTypes = {
  align: string,
  burger: bool,
  closePanel: func,
  column: bool,
  isFooter: bool,
}

NavigationLinks.defaultProps = {
  align: 'center',
  burger: false,
  closePanel: Function.prototype,
  column: false,
  isFooter: false,
}

export default NavigationLinks
