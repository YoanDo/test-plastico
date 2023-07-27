import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const DataUseWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-size: ${({ theme }) => theme.fourthFS};
  color: ${({ theme }) => theme.surfRiderBlue};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};
`;

const Text = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const DataUse = () => (
  <DataUseWrapper>
    <Title>
      <FormattedMessage id="data_use" />
    </Title>
    <Text>
      <FormattedMessage id="data_use_sub" />
    </Text>
    <Title>
      <FormattedMessage id="data_use_restriction" />
    </Title>
    <Text>
      <FormattedMessage id="data_use_restriction_sub" />
    </Text>
    <Title>
      <FormattedMessage id="data_use_free" />
    </Title>
    <Text>
      <FormattedMessage id="data_use_free_sub" />
    </Text>
    <Title>
      <FormattedMessage id="data_use_warning" />
    </Title>
    <Text>
      <FormattedMessage id="data_use_warning_sub" />
    </Text>
  </DataUseWrapper>
);

DataUse.propTypes = {};

export default DataUse;
