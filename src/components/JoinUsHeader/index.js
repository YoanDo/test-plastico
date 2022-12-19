import React from 'react';
import { FormattedMessage } from 'react-intl';
import { About, HeaderWrapper, Illustration, Wrapper, Title } from './styles';

const JoinUsHeader = () => (
  <Wrapper>
    <HeaderWrapper>
      <Title>Join us</Title>
      <About id="about">
        <span>
          <FormattedMessage id="join_us_intro" />
        </span>
      </About>
    </HeaderWrapper>
    <Illustration />
  </Wrapper>
);

JoinUsHeader.propTypes = {};

export default JoinUsHeader;
