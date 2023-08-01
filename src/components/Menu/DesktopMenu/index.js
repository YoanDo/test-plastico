import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

import { useRouter } from 'next/router';
import { func } from 'prop-types';
import {
  MenuWrapper,
  NavigationLinksWrapper,
  RightWrapper,
  Wrapper
} from './styles';
import Button from '../../UI/Button';

import NavigationLinks from '../../Navigation';
// import User from './components/User'

import Ribbon from '../../Ribbon';

const Menu = ({ openDownloadAppModal }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '#wrapper',
      { marginTop: -200, opacity: 0, duration: 2, ease: 'power3.in' },
      { opacity: 1, marginTop: 0 }
    );
  }, []);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <Wrapper id="wrapper">
      <MenuWrapper>
        <Ribbon />
        <NavigationLinksWrapper className="item">
          <NavigationLinks />
        </NavigationLinksWrapper>
        <RightWrapper>
          <Button label="download_app" onClick={openDownloadAppModal} />
        </RightWrapper>
      </MenuWrapper>
    </Wrapper>
  );
};
Menu.propTypes = {
  openDownloadAppModal: func
};

Menu.defaultProps = {
  openDownloadAppModal: Function.prototype
};

export default Menu;
