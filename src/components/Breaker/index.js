import React from 'react'
import { string, bool } from 'prop-types'

import BreakerWrapper from './styles'

const Breaker = ({ color, bold }) => <BreakerWrapper color={color} bold={bold} />

Breaker.propTypes = {
  color: string,
  bold: bool,
}

Breaker.defaultProps = {
  color: null,
  bold: false,
}

export default Breaker
