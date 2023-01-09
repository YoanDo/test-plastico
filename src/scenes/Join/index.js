import React from 'react';
import JoinUsHeader from '../../components/JoinUsHeader';
import JoinActions from '../../components/JoinActions';
import { Wrapper } from '../../hoc/layout/styles';

const JoinUsPage = () => (
  <Wrapper>
    <JoinUsHeader />
    <JoinActions />
  </Wrapper>
);

export default JoinUsPage;
