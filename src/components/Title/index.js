import React from 'react'
import PropTypes, { bool, string } from 'prop-types'

import { TextTitle, TitleWrapper } from './styles'
import Breaker from '../UI/Breaker'
import theme from '../../assets/theme'

const Title = ({ children, color, isBreakerDisplayed }) => (
  <TitleWrapper>
    <TextTitle>{children}</TextTitle>
    {isBreakerDisplayed && <Breaker color={color} bold />}
  </TitleWrapper>
)

Title.propTypes = {
  children: PropTypes.element,
  color: string,
  isBreakerDisplayed: bool,
}

Title.defaultProps = {
  children: null,
  color: theme.black,
  isBreakerDisplayed: true,
}
export default Title
