import React, { Fragment } from 'react';
import withLayout from '../src/hoc/layout';

import Footer from '../src/components/Footer';
import SponsorLogos from '../src/components/SponsorsLogo';
import client from '../client';
import SponsorsHeader from '../src/components/SponsorsHeader';

const Sponsors = ({ sponsors }) => (
  <>
    <SponsorsHeader />
    <div style={{ margin: '200px 0' }}>
      <SponsorLogos sponsors={sponsors} />
    </div>
    <div style={{ margin: '200px 0' }}>
      <SponsorLogos sponsors={sponsors} isBlackAndWhite />
    </div>

    <Footer />
  </>
);

export async function getStaticProps() {
  const data = await client.fetch('*[_type == "sponsor"]');

  return {
    props: {
      sponsors: data
    }
  };
}

export default withLayout(Sponsors);
