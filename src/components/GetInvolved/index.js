import React from 'react'
import { FormattedMessage } from 'react-intl'
import Title from '../Title'
import Cart from '../Cart'
import { CartWrapper, Wrapper } from './styles'

const GetInvolved = () => (
  <Wrapper>
    <Title>
      <FormattedMessage id="get_involved_1" />
      <br />
      <FormattedMessage id="get_involved_2" />
    </Title>
    <CartWrapper>
      <Cart label="get_involved_collect" link="mailto:plasticorigins@surfrider.eu" />
      <Cart label="get_involved_label" link="mailto:plasticorigins@surfrider.eu" />
      <Cart label="get_involved_donate" marginBottom={false} link="https://donate.surfrider.eu/b/mon-don" />
    </CartWrapper>
  </Wrapper>
)

export default GetInvolved
