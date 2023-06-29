import React, { Fragment } from 'react';
import { array } from 'prop-types';
import withLayout from '../src/hoc/layout';

import Footer from '../src/components/Footer';
import DataPage from '../src/scenes/Data';
import client from '../client';

const Data = ({ faqs }) => (
  <>
    <DataHeader />
    <DataPage faqs={faqs} />
    <Footer />
  </>
);

export async function getStaticProps() {
  const faqs = await client.fetch('*[_type == "dataFaq"]');

  return {
    props: {
      faqs
    }
  };
}

Data.propTypes = {
  faqs: array
};
export default withLayout(Data);
