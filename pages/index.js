import React, { Fragment } from 'react'

import withLayout from '../src/components/Layout'
import Header from '../src/components/Header'
import { Wrapper } from '../src/components/Layout/styles'
import OurMission from '../src/components/OurMission'
import Wave from '../src/components/Wave'

const HomePage = () => (
  <Fragment>
    <Header />
    <OurMission />
    <Wave />
    <Wrapper>
      data <br />
      get involve
      <br />
      footer
      <br />
    </Wrapper>
  </Fragment>
)
export default withLayout(HomePage)
