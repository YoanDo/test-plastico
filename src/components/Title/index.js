import React from 'react'
import PropTypes, { boolean, string } from 'prop-types'

import { TextTitle, TitleWrapper } from './styles'
import Breaker from '../UI/Breaker'

const Title = ({ children, color, isBreakerDisplayed }) => (
  <TitleWrapper>
    <TextTitle>{children}</TextTitle>
    {isBreakerDisplayed && <Breaker color={color} bold />}
  </TitleWrapper>
)

Title.propTypes = {
  children: PropTypes.element,
  color: string,
  isBreakerDisplayed: boolean,
}

Title.defaultProps = {
  children: null,
  color: null,
  isBreakerDisplayed: true,
}
export default Title
