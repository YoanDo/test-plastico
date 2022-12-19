import React, { Fragment } from 'react';
import withLayout from '../src/hoc/layout';

import Footer from '../src/components/Footer';
import SolutionsPage2 from '../src/scenes/Solutions_new';

const Solution = () => (
  <>
    <SolutionsPage2 />
    <Footer />
  </>
);
export default withLayout(Solution);
