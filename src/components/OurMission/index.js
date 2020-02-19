import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Wrapper } from '../Layout/styles'
import { About, AboutImage, Left, Section } from './styles'

import Title from '../Title'

const OurMission = () => (
  <Wrapper>
    <Section>
      <Title />
      <Left>
        <About>
          "
          <span>
            <FormattedMessage id="about_us_1" />
          </span>
          <FormattedMessage id="about_us_2" />"
        </About>
        <AboutImage />
      </Left>
    </Section>
  </Wrapper>
)
export default OurMission
