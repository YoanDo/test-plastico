import React, { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Banner, MobileBanner, Title } from './styles'
import gsap from 'gsap'
import { animateScroll as scroll } from 'react-scroll'

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
    tl.from('#title', { autoAlpha: '0', duration: 1 })
    tl.add(function () {
      scrollMoreDown300()
    }, '+=1')
  }, [])

  return (
    <Banner id={'banner'} ref={ref}>
      <MobileBanner>
        {isTabletOrMobile && <Ribbon right="20px" top="0" left="auto" />}
        <Title id={'title'}>Plastic Origins</Title>
      </MobileBanner>
    </Banner>
  )
}

export default Header
