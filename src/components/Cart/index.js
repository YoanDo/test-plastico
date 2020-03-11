import React from 'react'
import { string, bool } from 'prop-types'
import Fade from 'react-reveal/Fade'
import { FormattedMessage } from 'react-intl'

import { CartWrapper, Title, Content, ButtonWrapper } from './styles'
import Button from '../Button'

const Cart = ({ label, displayTitle, marginBottom }) => (
  <Fade bottom>
    <CartWrapper displayTitle={displayTitle} marginBottom={marginBottom}>
      <Title>{label && displayTitle && <FormattedMessage id={`${label}_title`} />}</Title>
      <Content>{label && <FormattedMessage id={`${label}_content`} />}</Content>
      <ButtonWrapper>
        <Button negative fullWidth label={`${label}_cta`} />
      </ButtonWrapper>
    </CartWrapper>
  </Fade>
)

Cart.propTypes = {
  label: string,
  displayTitle: bool,
  marginBottom: bool,
}

Cart.defaultProps = {
  label: null,
  displayTitle: true,
  marginBottom: true,
}

export default Cart
