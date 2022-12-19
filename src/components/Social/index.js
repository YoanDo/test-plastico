import React from 'react';

import { SocialWrapper } from './styles';
import FacebookLink from './components/Facebook';
import InstagramLink from './components/Instagram';
import TwitterLink from './components/Twitter';

const Social = () => (
  <SocialWrapper>
    <TwitterLink />
    <InstagramLink />
    <FacebookLink />
  </SocialWrapper>
);

export default Social;
