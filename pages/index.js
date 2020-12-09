import React, { Fragment } from 'react'

import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Project from '../src/components/Project'
import Video from '../src/components/Video'
import Wave from '../src/components/Wave'
import withLayout from '../src/hoc/layout'
import KeyDatas from '../src/components/KeyDatas'

const HomePage = () => (
  <Fragment>
    <Header />
    <KeyDatas/>
    <Project />
    <Video />
    <Wave />
    <Footer />
  </Fragment>
)
export default withLayout(HomePage)
