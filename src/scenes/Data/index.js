import React from 'react';
import { array } from 'prop-types';
import Map from '../../components/MapRough/Map';
import DataHeader from '../../components/DataHeader2';
import DataFaq from '../../containers/DataFaq';
import { Wrapper } from '../../hoc/layout/styles';
import { Title } from './styles';

const DataPage = ({ faqs }) => (
  <>
    <DataHeader />
    <Map />- _lien vers source_
    <Wrapper>
      <Title>questions</Title>
      <DataFaq faqs={faqs} />
    </Wrapper>
    <Wrapper>
      <Title>source</Title>
    </Wrapper>
  </>
);

DataPage.propTypes = {
  faq: array
};

export default DataPage;
