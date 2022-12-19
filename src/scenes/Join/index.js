import React, { useEffect } from 'react';
import JoinPdf from '../../components/JoinPDF';
import JoinUsHeader from '../../components/JoinUsHeader';
import JoinActions from '../../components/JoinActions';
import JoinVideo from '../../containers/JoinVideo';
import { Wrapper } from '../../hoc/layout/styles';

const JoinUsPage = () => (
  <Wrapper>
    <JoinUsHeader />
    <JoinActions />
    {/* <JoinVideo /> */}
    {/* <JoinPdf /> */}
  </Wrapper>
);

export default JoinUsPage;
