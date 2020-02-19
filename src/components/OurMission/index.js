import React from 'react'
import { FormattedMessage } from 'react-intl'
import Fade from 'react-reveal/Fade'

import { Wrapper } from '../Layout/styles'
import { About, AboutImage, Left, Section } from './styles'
import Title from '../Title'

const OurMission = () => (
  <Wrapper>
    <Section>
      <Title />
      <Left>
        <Fade bottom>
          <About>
            "
            <span>
              <FormattedMessage id="about_us_1" />
            </span>
            <FormattedMessage id="about_us_2" />"
          </About>
        </Fade>
        <AboutImage />
      </Left>
    </Section>
  </Wrapper>
)
export default OurMission
