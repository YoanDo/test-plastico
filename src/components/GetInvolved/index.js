import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import Title from '../Title'
import Cart from '../Cart'
import { CartWrapper, BlueWrapper } from './styles'

const GetInvolved = () => {
  const zoomLink = useIntl().formatMessage({ id: 'get_involve_zoom_link' })

  return (
    <BlueWrapper>
      <Title color="white">
        <>
          <FormattedMessage id="get_involved_1" />
          <br />
          <FormattedMessage id="get_involved_2" />
        </>
      </Title>
      <CartWrapper>
        <Cart label="get_involved_collect" link={zoomLink} />
        <Cart label="get_involved_label" link="http://www.trashroulette.com" />
        <Cart label="get_involved_donate" marginBottom={false} link="https://donate.surfrider.eu/b/mon-don" />
      </CartWrapper>
    </BlueWrapper>
  )
}

export default GetInvolved
