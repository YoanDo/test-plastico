import { animateScroll as scroll } from 'react-scroll'
// import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'

import { Banner, MobileBanner, TagLine, TitleWrapper } from './styles'
import Title from './components/Title'
// import Ribbon from '../Ribbon'

const Header = () => {
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
  const ref = useRef(null)

  function scrollDown() {
    const isUserTop = window && window.pageYOffset === 0
    isUserTop && ref.current && scroll.scrollMore(ref.current.clientHeight)
  }

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to('#banner', { opacity: '1', duration: 0, ease: 'power3.in' })
      .to('#titleWrapper', { opacity: '1', duration: 1, ease: 'power3.in' })
      .to('#title', { autoAlpha: '1', duration: 1, ease: 'power3.in' })
      .from('#title2', { autoAlpha: '0', x: -10, duration: 1, ease: 'back.out(1.7)' })
      .from('#tag-line', { autoAlpha: '0', duration: 1, ease: 'power3.in' }, '-=.7')
      .add(function () {
        scrollDown()
      }, '+=1.4')
  }, [])

  return (
    <Banner id={'banner'} ref={ref}>
      <MobileBanner>
        {/* //todo fix ribbon position on mobile  {isTabletOrMobile && <div><Ribbon right="20px" top="0" left="auto" /></div>} */}
        <TitleWrapper id="titleWrapper">
          <div id={'title'}>
            <Title label={'Plastic'} />
          </div>
          <div id={'title2'}>
            <Title label={'Origins'} />
          </div>
          <TagLine id={'tag-line'}>
            <FormattedMessage id="tagline" />
          </TagLine>
        </TitleWrapper>
      </MobileBanner>
    </Banner>
  )
}

export default Header
