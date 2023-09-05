import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  About,
  HeaderWrapper,
  Illustration,
  Wrapper,
  Title,
  Highlight,
  IntroWrapper
} from './styles';

const DataHeader = () => (
  <Wrapper>
    <HeaderWrapper>
      <Title>
        <FormattedMessage id="data" />
      </Title>
      <About>
        <IntroWrapper>
          <span>
            <FormattedMessage id="data_intro_1" />
          </span>
          <span className="highlight">
            <FormattedMessage id="data_intro_2" />
          </span>
          <span>
            <FormattedMessage id="data_intro_3" />
          </span>
        </IntroWrapper>
      </About>
    </HeaderWrapper>
    <Illustration />
  </Wrapper>
);

DataHeader.propTypes = {};

export default DataHeader;
