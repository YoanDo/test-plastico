import React, { useEffect, useRef } from 'react'
import { About, LeftImage, RightSide, LimeLine, Title, Wrapper, Count, IconWrapper } from './styles'
import { FormattedMessage } from 'react-intl'
import CountUp from 'react-countup'
import ChevronDown from '../../assets/svg/chevron_down.svg'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'
import theme from '../../assets/theme'
import { animateScroll as scroll } from 'react-scroll'

const DataHeader = () => {
  const isBelowLaptop = useMediaQuery({ query: `(max-width: ${theme.size.laptop})` })
  useEffect(() => {
    const tl = gsap.timeline()
    tl.from('#count', { autoAlpha: '0', duration: 1, ease: 'back.out(1.7)' })
    tl.from('#title', { autoAlpha: '0', duration: 1, ease: 'back.out(1.7)' }, '+=1')
    tl.from('#illustration', { x: isBelowLaptop ? '-100vw' : '-60vw', duration: 2, ease: 'power1.inOut' }, '-=2')
    tl.from('#lime-line', { width: '0', duration: 3, ease: 'slow(0.7, 0.7, false)' }, '-=2')
    tl.from('#about', { autoAlpha: '0', duration: 1, ease: 'power1.inOut' })
    tl.from('#icon', { autoAlpha: '0', y: '30px', duration: 1, ease: 'slow(0.7, 0.7, false)' }, '+=1')
  }, [])
  const ref = useRef(null)

  function scrollDown() {
    const isUserTop = window && window.pageYOffset === 0
    isUserTop && scroll.scrollMore(ref.current.clientHeight)
  }

  return (
    <Wrapper ref={ref}>
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
        <ChevronDown onClick={scrollDown} />
      </IconWrapper>
    </Wrapper>
  )
}

export default DataHeader
