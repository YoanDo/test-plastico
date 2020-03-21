import React from 'react'
import { FormattedMessage } from 'react-intl'
import Title from '../Title'
import Cart from '../Cart'
import { CartWrapper, Wrapper } from './styles'

const GetInvolved = () => (
  <Wrapper name="getInvolved">
    <Title>
      <FormattedMessage id="get_involved_1" />
      <br />
      <FormattedMessage id="get_involved_2" />
    </Title>
    <CartWrapper>
      <Cart label="get_involved_collect" />
      <Cart label="get_involved_label" />
      <Cart label="get_involved_donate" marginBottom={false} />
    </CartWrapper>
  </Wrapper>
)

export default GetInvolved
