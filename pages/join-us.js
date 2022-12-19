import React, { Fragment } from 'react';
import withLayout from '../src/hoc/layout';

import Footer from '../src/components/Footer';
import JoinUsPage from '../src/scenes/Join';

const JoinUs = () => (
  <>
    <JoinUsPage />
    <Footer />
  </>
);
export default withLayout(JoinUs);
