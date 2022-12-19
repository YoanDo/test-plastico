import React, { Fragment } from 'react';

import GTC from '../src/components/Legal/GTC';
import Footer from '../src/components/Footer';
import withLayout from '../src/hoc/layout';

const GTCPage = () => (
  <>
    <GTC />
    <Footer />
  </>
);
export default withLayout(GTCPage);
