import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { BrowserView, MobileView } from 'react-device-detect';

import Footer from '../src/components/Footer'
import KeyDatas from '../src/components/KeyDatas'
import Wave from '../src/components/Wave'
import withLayout from '../src/hoc/layout'
import VideoHeroHeader from '../src/containers/VideoHeader'
import Header from '../src/components/Header'

const Project = dynamic(import('../src/components/Project'))
const Video = dynamic(import('../src/components/Video'))

function HomePage() {
  return (
    <Fragment>
      {/* <BrowserView>
        <VideoHeroHeader />
      </BrowserView>
      <MobileView>
        <Header />
      </MobileView> */}
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
