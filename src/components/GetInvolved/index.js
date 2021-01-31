import React from 'react'
import { FormattedMessage } from 'react-intl'
import Title from '../Title'
import Cart from '../Cart'
import { CartWrapper, Wrapper } from './styles'

const GetInvolved = () => {
  const isUserFrench =
    typeof window !== 'undefined' &&
    typeof window.navigator !== 'undefined' &&
    navigator.language &&
    navigator.language.split(/[-_]/)[0] === 'fr'

  const zoomLinkEN = 'https://us02web.zoom.us/meeting/register/tZ0rcOCqqDkqHtP_hcUF0lI3avfpi10DuTNq'
  const zoomLinkFR = 'https://us02web.zoom.us/meeting/register/tZ0rc-utpzgqGdR0Kn3NDRgFuq4saddL9ugz'

  return (
    <Wrapper>
      <Title>
        <FormattedMessage id='get_involved_1' />
        <br />
        <FormattedMessage id='get_involved_2' />
      </Title>
      <CartWrapper>
        <Cart label='get_involved_collect' link={isUserFrench ? zoomLinkFR : zoomLinkEN} />
        <Cart label='get_involved_label' link='http://trashroulette.com' />
        <Cart label='get_involved_donate' marginBottom={false} link='https://donate.surfrider.eu/b/mon-don' />
      </CartWrapper>
    </Wrapper>
  )
}

export default GetInvolved
