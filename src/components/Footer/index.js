import React from 'react';
import Link from 'next/link';
import Social from '../Social';
import { FooterWrapper, SocialWrapper, SurfRiderLogo } from './styles';
import Navigation from '../Navigation';

const Footer = () => (
  <FooterWrapper>
    <Link href="https://surfrider.eu/" target="blank">
      <SurfRiderLogo />
    </Link>
    <Navigation column align="flex-start" isFooter />
    <SocialWrapper>
      <Social />
    </SocialWrapper>
  </FooterWrapper>
);

export default React.memo(Footer);
