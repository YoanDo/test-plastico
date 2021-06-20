import React from 'react'
import { About, HeaderWrapper, Illustration, Wrapper, Title } from './styles'
import { FormattedMessage } from 'react-intl'

const SolutionsHeader = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Solutions</Title>
        <About id="about">
          <span>
            <FormattedMessage id="solution_intro_1" />
          </span>
        </About>
      </HeaderWrapper>
      <Illustration />
    </Wrapper>
  )
}

SolutionsHeader.propTypes = {}

export default SolutionsHeader
