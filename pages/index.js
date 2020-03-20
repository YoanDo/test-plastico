import React, { Fragment } from 'react'

import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import OurMission from '../src/components/OurMission'
import Video from '../src/components/Video'
import Wave from '../src/components/Wave'
import withLayout from '../src/components/Layout'

const HomePage = () => (
  <Fragment>
    <Header />
    <OurMission />
    <Video />
    <Wave />
    <Footer />
  </Fragment>
)
export default withLayout(HomePage)
