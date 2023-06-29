import React from 'react';
import { FormattedMessage } from 'react-intl';
import { About, HeaderWrapper, Illustration, Wrapper, Title } from './styles';

const DataHeader = () => (
  <Wrapper>
    <HeaderWrapper>
      <Title>
        <FormattedMessage id="data" />
      </Title>
      <About id="about">
        <span>
          <FormattedMessage id="data_intro" />
        </span>
      </About>
    </HeaderWrapper>
    <Illustration />
  </Wrapper>
);

DataHeader.propTypes = {};

export default DataHeader;
