import React from 'react';
import { FormattedMessage } from 'react-intl';
import { About, HeaderWrapper, Illustration, Wrapper, Title } from './styles';

const SponsorsHeader = () => (
  <Wrapper>
    <HeaderWrapper>
      <Title>Sponsors</Title>
      <About id="about">
        <span>
          <FormattedMessage id="join_us_intro" />
        </span>
      </About>
    </HeaderWrapper>
    <Illustration />
  </Wrapper>
);

SponsorsHeader.propTypes = {};

export default SponsorsHeader;
