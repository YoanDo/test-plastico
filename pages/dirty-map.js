import React, { Fragment } from 'react';

import Footer from '../src/components/Footer';
import withLayout from '../src/hoc/layout';
import DirtyMap from '../src/components/DirtyMap';

const DirtyMapPage = () => (
  <>
    <DirtyMap />
    <Footer />
  </>
);
export default withLayout(DirtyMapPage);
