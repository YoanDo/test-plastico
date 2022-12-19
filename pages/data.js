import React, { Fragment } from 'react';
import withLayout from '../src/hoc/layout';

import DataHeader from '../src/components/DataHeader';
import DataMap from '../src/components/DataMap';
import Footer from '../src/components/Footer';

const Data = () => (
  <>
    <DataHeader />
    <DataMap />
    <Footer />
  </>
);
export default withLayout(Data);
