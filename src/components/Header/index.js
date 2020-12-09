import { animateScroll as scroll } from 'react-scroll'
import { Banner, MobileBanner, TitleWrapper } from './styles'
import Title from './components/Title'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

import Ribbon from '../Ribbon'

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
  const ref = useRef(null)

  function scrollMoreDown300() {
    const isUserTop = window && window.pageYOffset === 0
    isUserTop && scroll.scrollMore(ref.current.clientHeight)
  }

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from('#banner', { autoAlpha: '0', duration: 2, ease: 'power3.in' })
    tl.from('#title', { autoAlpha: '0', duration: 1, ease: 'power3.in' })
    tl.from('#title2', { autoAlpha: '0', x: -10, duration: 1, ease: 'power3.in' })
    tl.add(function () {
      scrollMoreDown300()
    }, '+=1')
  }, [])

  return (
    <Banner id={'banner'} ref={ref}>
      <MobileBanner>
        {/* //todo fix ribbon position on mobile  {isTabletOrMobile && <div><Ribbon right="20px" top="0" left="auto" /></div>} */}
        <TitleWrapper>
          <div id={'title'}>
            <Title label={'Plastic'} />
          </div>
          <div id={'title2'}>
            <Title label={'Origins'} />
          </div>
        </TitleWrapper>
      </MobileBanner>
    </Banner>
  )
}

export default Header
