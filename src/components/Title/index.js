import React from 'react'

import { TextTitle, TitleWrapper } from './styles'
import Breaker from '../Breaker'

const Title = () => (
  <TitleWrapper>
    <TextTitle>
      Our <br />
      goal
    </TextTitle>
    <Breaker color="black" bold />
  </TitleWrapper>
)

export default Title
