import { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import { isNil } from 'ramda'
import { animateScroll as scroll } from 'react-scroll'

import Menu from '../../containers/DesktopMenu'
import GlobalStyle, { Wrapper } from './styles'

const withLayout = (Page) => () => {
  const { target } = useRouter().query
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
