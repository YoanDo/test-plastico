import React from 'react'
import { string } from 'prop-types'

import { ButtonWrapper } from './styles'

const Button = ({ label }) => <ButtonWrapper>{label}</ButtonWrapper>

Button.propTypes = {
  label: string,
}

Button.defaultProps = {
  label: null,
}

export default Button
