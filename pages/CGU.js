import React, { Fragment } from 'react';

import Legal from '../src/components/Legal/Index';
import Footer from '../src/components/Footer';
import withLayout from '../src/hoc/layout';
import client from '../client';

const CGUPage = ({ data }) => (
  <>
    <Legal data={data} />
    <Footer />
  </>
);

export async function getStaticProps() {
  const data = await client.fetch('*[_type == "page" && title == "cgu"][0]');

  return {
    props: {
      data
    }
  };
}

export default withLayout(CGUPage);
