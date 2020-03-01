import React from 'react'
import PropTypes, { string } from 'prop-types'

import { TextTitle, TitleWrapper } from './styles'
import Breaker from '../Breaker'

const Title = ({ children, color }) => (
  <TitleWrapper>
    <TextTitle>{children}</TextTitle>
    <Breaker color={color} bold />
  </TitleWrapper>
)

Title.propTypes = {
  children: PropTypes.element,
  color: string,
}

Title.defaultProps = {
  children: null,
  color: null,
}
export default Title
