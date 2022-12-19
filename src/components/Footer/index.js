import React from 'react';
import { FormattedMessage } from 'react-intl';

import Social from '../Social';
import SurfRiderLink from './components/SurfRiderLink';
import { FooterWrapper, SocialWrapper } from './styles';
import Navigation from '../Navigation';

const Footer = () => (
  <FooterWrapper>
    <SurfRiderLink />
    <Navigation column align="flex-start" isFooter />
    <SocialWrapper>
      <p>
        <FormattedMessage id="follow_us" />
      </p>
      <Social />
    </SocialWrapper>
  </FooterWrapper>
);

export default React.memo(Footer);
