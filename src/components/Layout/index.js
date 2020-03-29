import { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import { isNil } from 'ramda'
import { animateScroll as scroll } from 'react-scroll'

import Menu from '../Menu'
import GlobalStyle, { Wrapper } from './styles'

const withLayout = Page => () => {
  const { target, offSet } = useRouter().query
  const smoothScroll = () => {
    if (isNil(target)) return null
    const adjust = (!isNil(offSet) && offSet) || 0
    const targetPosition = document.getElementsByName(target)[0].offsetTop - adjust
    scroll.scrollTo(targetPosition, {
      activeClass: true,
      duration: 500,
      delay: 100,
      smooth: true,
    })
  }

  useEffect(() => {
    smoothScroll()
  })

  return (
    <Fragment>
      <Wrapper menu>
        <Menu />
      </Wrapper>
      <Page />
      <GlobalStyle whiteColor />
    </Fragment>
  )
}

export default withLayout
