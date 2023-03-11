import React, { Fragment } from 'react';

import Footer from '../src/components/Footer';
import withLayout from '../src/hoc/layout';
import client from '../client';
import Legal from '../src/components/Legal/Index';

const CGUPage = ({ data }) => (
  <>
    <Legal data={data} />
    <Footer />
  </>
);

export async function getStaticProps() {
  const data = await client.fetch('*[_type == "page" && title == "gtc"][0]');

  return {
    props: {
      data
    }
  };
}

export default withLayout(CGUPage);
