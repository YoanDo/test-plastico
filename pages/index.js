import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { BrowserView, MobileView } from 'react-device-detect';

import { array } from 'prop-types';
import Footer from '../src/components/Footer';
import KeyDatas from '../src/components/KeyDatas';
import Wave from '../src/components/Wave';
import withLayout from '../src/hoc/layout';
import VideoHeroHeader from '../src/containers/VideoHeader';
import Header from '../src/components/Header';
import client from '../client';
import SponsorsHome from '../src/components/SponsorsHome';

const Project = dynamic(import('../src/components/Project'));
const Video = dynamic(import('../src/components/Video'));

const HomePage = ({ sponsors, stats }) => (
  <>
    <BrowserView>
      <VideoHeroHeader />
    </BrowserView>
    <MobileView>
      <Header />
    </MobileView>
    {/* <Header /> */}
    <KeyDatas stats={stats} />
    <Project />
    <Video />
    <Wave />
    <SponsorsHome sponsors={sponsors} />
    <Footer />
  </>
);

export async function getStaticProps() {
  const sponsorInfos = await client.fetch('*[_type == "sponsor"]');
  const stats = await client.fetch('*[_type == "keyData"]');

  return {
    props: {
      stats,
      sponsors: sponsorInfos
    },
    revalidate: 10
  };
}

HomePage.propTypes = {
  sponsors: array,
  stats: array
};

export default withLayout(HomePage);
