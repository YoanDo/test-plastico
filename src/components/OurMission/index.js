import React from 'react'
import { FormattedMessage } from 'react-intl'
import Fade from 'react-reveal/Fade'

import { Wrapper } from '../Layout/styles'
import { About, AboutImage, Left, Section } from './styles'
import Title from '../Title'
import Goals from '../Goals'

const OurMission = () => (
  <Wrapper>
    <Section>
      <Title>
        <FormattedMessage id="our_mission_1" /> <br />
        <FormattedMessage id="our_mission_2" />
      </Title>
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
    <Section>
      <Goals />
    </Section>
  </Wrapper>
)
export default OurMission
