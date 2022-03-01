import React, { useEffect, useRef } from 'react'
import { About, LeftImage, RightSide, LimeLine, Title, Wrapper, Count, IconWrapper } from './styles'
import { FormattedMessage } from 'react-intl'
import CountUp from 'react-countup'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'
import theme from '../../assets/theme'
import { animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'

const DataHeader = () => {
  const isBelowLaptop = useMediaQuery({ query: `(max-width: ${theme.size.laptop})` })
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to('#wrapper', { opacity: 1, duration: 1, ease: 'power1.out' })
      .from('#count', { autoAlpha: '0', duration: 1, ease: 'back.out(1.7)' })
      .from('#title', { autoAlpha: '0', duration: 1, ease: 'back.out(1.7)' }, '+=1')
      .from('#illustration', { x: isBelowLaptop ? '-100vw' : '-60vw', duration: 2.5, ease: 'power1.inOut' }, '-=2')
      .from('#lime-line', { width: '0', duration: 3, ease: 'slow(0.7, 0.7, false)' }, '-=2')
      .from('#about', { autoAlpha: '0', duration: 1, ease: 'power1.inOut' })
      .from('#icon', { autoAlpha: '0', y: '30px', duration: 1, ease: 'slow(0.7, 0.7, false)' }, '+=1')
  }, [])
  const ref = useRef(null)

  function scrollDown() {
    const isUserTop = window && window.pageYOffset === 0
    isUserTop && scroll.scrollMore(ref.current.clientHeight)
  }

  return (
    <Wrapper ref={ref} id="wrapper">
      <LeftImage id="illustration" />
      <Title id="title">data</Title>
      <LimeLine id="lime-line" />
      <RightSide>
        <Count id="count">
          <CountUp delay={1} duration={4} end={100} start={0} />%
        </Count>
        <About id="about">
          <span>
            <FormattedMessage id="data_intro" />
          </span>
        </About>
      </RightSide>
      <IconWrapper id="icon">
        <Image src="/svg/chevron_down.svg" onClick={scrollDown} />
      </IconWrapper>
    </Wrapper>
  )
}

export default DataHeader
