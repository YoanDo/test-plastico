import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Wave from '../src/components/Wave'
import withLayout from '../src/hoc/layout'
import KeyDatas from '../src/components/KeyDatas'

function HomePage() {
  const Project = dynamic(import('../src/components/Project'))
  const Video = dynamic(import('../src/components/Video'))

  return (
    <Fragment>
      <Header />
      <KeyDatas />
      <Project />
      <Video />
      <Wave />
      <Footer />
    </Fragment>
  )
}
export default withLayout(HomePage)
