import React, { Fragment } from 'react';
import withLayout from '../src/hoc/layout';

import DataHeader from '../src/components/DataHeader';
import Footer from '../src/components/Footer';
import Map from '../src/components/MapRough/Map';

const Data = () => (
  <>
    <DataHeader />
    <Map />
    <Footer />
  </>
);
export default withLayout(Data);
