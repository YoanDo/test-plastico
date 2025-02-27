import React, { Fragment } from 'react';

import Footer from '../src/components/Footer';
import withLayout from '../src/hoc/layout';
import TeamPage from '../src/scenes/Team';

const Team = () => (
  <>
    <TeamPage />
    <Footer />
  </>
);
export default withLayout(Team);
