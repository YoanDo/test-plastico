/* eslint-disable react/display-name */
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { isNil } from 'ramda'
import { animateScroll as scroll } from 'react-scroll'
import { TweenMax } from 'gsap'

import Menu from '../../containers/DesktopMenu'
import GlobalStyle, { Wrapper, PreventAnimationFlashWrapper } from './styles'
import { useDispatch } from 'react-redux'
import { updateLanguage } from '../../redux/actions'

const withLayout = (Page) => () => {
  const { target } = useRouter().query
  const dispatch = useDispatch()
  const smoothScroll = () => {
    if (isNil(target)) return null
    const targetPosition = document.getElementsByName(target)[0].offsetTop
    scroll.scrollTo(targetPosition, {
      activeClass: true,
      duration: 500,
      delay: 100,
      smooth: true,
    })
  }
  useEffect(() => {
    const isUserFrench =
      typeof window !== 'undefined' &&
      typeof window.navigator !== 'undefined' &&
      navigator.language &&
      navigator.language.split(/[-_]/)[0] === 'fr'

    const lang = isUserFrench ? 'fr' : 'en'

    return dispatch(updateLanguage(lang))
  }, [])

  useEffect(() => {
    TweenMax.set('#preventAnimationFlashWrapper', { opacity: 1 })
    smoothScroll()
  })

  return (
    <PreventAnimationFlashWrapper id="preventAnimationFlashWrapper">
      <Wrapper menu>
        <Menu />
      </Wrapper>
      <Page />
      <GlobalStyle whiteColor />
    </PreventAnimationFlashWrapper>
  )
}

export default withLayout
