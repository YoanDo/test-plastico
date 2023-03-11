import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { isNil } from 'ramda';
import { animateScroll as scroll } from 'react-scroll';
import { TweenMax } from 'gsap';
import { useDispatch } from 'react-redux';

import Menu from '../../containers/DesktopMenu';
import GlobalStyle, { Wrapper, PreventAnimationFlashWrapper } from './styles';
import { updateLanguage } from '../../redux/actions';

const smoothScroll = (target) => {
  if (isNil(target)) return null;
  const targetPosition = target.offsetTop;
  scroll.scrollTo(targetPosition, {
    activeClass: true,
    duration: 500,
    delay: 100,
    smooth: true
  });
};

const Layout = ({ data, children }) => {
  const { target } = useRouter().query;
  const dispatch = useDispatch();
  const contentRef = useRef(null);

  useEffect(() => {
    const isUserFrench =
      typeof window !== 'undefined' &&
      typeof window.navigator !== 'undefined' &&
      navigator.language &&
      navigator.language.split(/[-_]/)[0] === 'fr';

    const lang = isUserFrench ? 'fr' : 'en';

    dispatch(updateLanguage(lang));
  }, []);

  useEffect(() => {
    TweenMax.set('#preventAnimationFlashWrapper', { opacity: 1 });
    smoothScroll(contentRef.current);
  }, [contentRef]);

  return (
    <PreventAnimationFlashWrapper id="preventAnimationFlashWrapper">
      <Wrapper menu>
        <Menu />
      </Wrapper>
      <div ref={contentRef}>{children}</div>
      <GlobalStyle whiteColor />
    </PreventAnimationFlashWrapper>
  );
};

const withLayout = (Page) => {
  const WrappedPage = (props) => (
    <Layout {...props}>
      <Page {...props} />
    </Layout>
  );

  return WrappedPage;
};

export default withLayout;
