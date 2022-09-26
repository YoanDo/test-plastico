import React from 'react'
import { string, bool } from 'prop-types'
import Fade from 'react-reveal/Fade'
import { FormattedMessage } from 'react-intl'

import { CartWrapper, Title, Content, ButtonWrapper } from './styles'
import Button from '../UI/Button'

const Cart = ({ label, displayTitle, marginBottom, link, isNegative }) => (
  <Fade bottom>
    <CartWrapper displayTitle={displayTitle} marginBottom={marginBottom} isNegative={isNegative} >
      <Title isNegative={isNegative}>{label && displayTitle && <FormattedMessage id={`${label}_title`} />}</Title>
      <Content>{label && <FormattedMessage id={`${label}_content`} />}</Content>
      <ButtonWrapper>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button negative={isNegative} fullWidth label={`${label}_cta`} />
        </a>
      </ButtonWrapper>
    </CartWrapper>
  </Fade>
)

Cart.propTypes = {
  displayTitle: bool,
  isNegative: bool,
  label: string,
  link: string,
  marginBottom: bool,
}

Cart.defaultProps = {
  displayTitle: true,
  isNegative: false,
  label: null,
  link: null,
  marginBottom: true,
}

export default Cart
