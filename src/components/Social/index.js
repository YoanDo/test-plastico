import React from 'react';

import { SocialWrapper } from './styles';
import FacebookLink from './components/Facebook';
import InstagramLink from './components/Instagram';
import TwitterLink from './components/Twitter';
import GithubLink from './components/Github';

const Social = () => (
  <SocialWrapper>
    <TwitterLink />
    <InstagramLink />
    <FacebookLink />
    <GithubLink />
  </SocialWrapper>
);

export default Social;
