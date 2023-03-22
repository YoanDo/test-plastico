import React, { Fragment } from 'react';
import { array } from 'prop-types';
import withLayout from '../src/hoc/layout';

import Footer from '../src/components/Footer';
import client from '../client';
import SponsorsHeader from '../src/components/SponsorsHeader';
import SponsorsCategory from '../src/components/SponsorsCategory';
import { Wrapper } from '../src/hoc/layout/styles';

const Sponsors = ({ sponsors }) => (
  <>
    <SponsorsHeader />
    <Wrapper>
      <SponsorsCategory category="gold" sponsors={sponsors} />
      <SponsorsCategory category="silver" sponsors={sponsors} />
      <SponsorsCategory category="bronze" sponsors={sponsors} />
      <SponsorsCategory category="field" sponsors={sponsors} />
      <SponsorsCategory category="technical" sponsors={sponsors} />
    </Wrapper>
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

Sponsors.propTypes = {
  sponsors: array
};
export default withLayout(Sponsors);
