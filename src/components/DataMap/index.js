import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Map from '../MapRough/Map';

const DataMapWrapper = styled.div``;

const DataMapLegend = styled.span`
  font-size: ${({ theme }) => theme.smallFS};
  margin-top: ${({ theme }) => theme.spacing(1)};
  display: block;
  color: ${({ theme }) => theme.grey};
`;

const DataMapText = styled.span`
  font-size: ${({ theme }) => theme.defaultFS};
  margin-top: ${({ theme }) => theme.spacing(2)};
  display: block;
`;

const DataMap = () => (
  <DataMapWrapper>
    <Map />
    <DataMapLegend>
      <FormattedMessage id="data_map_legend" />
    </DataMapLegend>
    <DataMapText>
      <FormattedMessage id="data_map_text" />
    </DataMapText>
  </DataMapWrapper>
);

DataMap.propTypes = {};

export default DataMap;
