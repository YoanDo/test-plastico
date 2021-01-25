import React, { useEffect, useState } from 'react'

import { MenuWrapper, NavigationLinksWrapper, RightWrapper, SocialWrapper, Wrapper } from './styles'
import Button from '../../UI/Button'
import Social from '../../Social'
import NavigationLinks from '../../Navigation'
import { useRouter } from 'next/router'
// import User from './components/User'

import Ribbon from '../../Ribbon'
import { func } from 'prop-types'

const Menu = ({ openDownloadAppModal }) => {
  const [scrollTop, setScrollTop] = useState(0)
  const router = useRouter()
  const isHome = router.pathname === '/'

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <Wrapper disappearOnOffsetTop={scrollTop === 0 && isHome}>
      <MenuWrapper>
        <Ribbon />
        <NavigationLinksWrapper>
          <NavigationLinks />
        </NavigationLinksWrapper>
        <RightWrapper>
          <SocialWrapper>
            <Social />
          </SocialWrapper>
          <Button label="download_app" onClick={openDownloadAppModal} />
        </RightWrapper>
      </MenuWrapper>
    </Wrapper>
  )
}
Menu.propTypes = {
  openDownloadAppModal: func,
}

Menu.defaultProps = {
  openDownloadAppModal: Function.prototype,
}

export default Menu
