import React from 'react';
import { array } from 'prop-types';
import Map from '../../components/MapRough/Map';
import DataHeader from '../../components/DataHeader2';
import DataFaq from '../../containers/DataFaq';
import { Wrapper } from '../../hoc/layout/styles';
import { Title } from './styles';
import DataUse from '../../components/DataUse';

const DataPage = ({ faqs }) => (
  <>
    <DataHeader />
    <Map />
    <Wrapper>
      <Title>questions</Title>
      <DataFaq faqs={faqs} />
    </Wrapper>
    <Wrapper>
      <Title>source</Title>
      <DataUse />
    </Wrapper>
  </>
);

DataPage.propTypes = {
  faqs: array
};

export default DataPage;
