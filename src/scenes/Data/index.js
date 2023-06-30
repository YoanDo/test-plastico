import React from 'react';
import { array } from 'prop-types';
import Map from '../../components/MapRough/Map';
import DataHeader from '../../components/DataHeader2';
import DataFaq from '../../containers/DataFaq';

const DataPage = ({ faqs }) => (
  <>
    - header
    <DataHeader />
    <Map />- faq - data source
    <DataFaq faqs={faqs} />
  </>
);

DataPage.propTypes = {
  faq: array
};

export default DataPage;
