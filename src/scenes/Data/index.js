import React from 'react';
import { array } from 'prop-types';
import DataHeader from '../../components/DataHeader2';
import DataFaq from '../../containers/DataFaq';
import { Wrapper } from '../../hoc/layout/styles';
import { Title } from './styles';
import DataUse from '../../components/DataUse';
import DataMap from '../../components/DataMap';

const DataPage = ({ faqs }) => (
  <>
    <DataHeader />
    <Wrapper>
      <DataMap />
    </Wrapper>
    <Wrapper>
      <Title>questions</Title>
      <DataFaq faqs={faqs} />
    </Wrapper>
    <Wrapper>
      <Title>sources</Title>
      <DataUse />
    </Wrapper>
  </>
);

DataPage.propTypes = {
  faqs: array
};

export default DataPage;
