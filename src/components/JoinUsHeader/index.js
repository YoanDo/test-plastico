import React from 'react'
import { About, HeaderWrapper, Illustration, Wrapper, Title } from './styles'
import { FormattedMessage } from 'react-intl'

const JoinUsHeader = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Join us</Title>
        <About id="about">
          <span>
            <FormattedMessage id="join_us_intro" />
          </span>
        </About>
      </HeaderWrapper>
      <Illustration />
    </Wrapper>
  )
}

JoinUsHeader.propTypes = {}

export default JoinUsHeader
