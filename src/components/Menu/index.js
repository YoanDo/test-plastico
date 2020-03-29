import React from 'react'
import Link from 'next/link'

import { Links, LogoWrapper, MenuWrapper, RightWrapper, SocialWrapper, SurfRiderRibbon, TopRibbon } from './styles'
import SurfRiderLogo from '../../assets/images/logos/surfrider.svg'
import Button from '../Button'
import Social from '../Social'

const Menu = () => (
  <MenuWrapper>
    <SurfRiderRibbon>
      <TopRibbon>
        <span>
          Proudly <br />
          powered by
        </span>
      </TopRibbon>
      <LogoWrapper>
        <img src={SurfRiderLogo} alt="surfrider logo" />
      </LogoWrapper>
    </SurfRiderRibbon>
    <Links>
      <Link href={{ pathname: '/', query: { target: 'project' } }}>
        <span>The project</span>
      </Link>
      <Link href={{ pathname: '/', query: { target: 'getInvolved' } }}>
        <span>Contribute</span>
      </Link>
      <Link href="/data">
        <span>Data</span>
      </Link>
      <span>About us</span>
    </Links>
    <RightWrapper>
      <SocialWrapper>
        <Social />
      </SocialWrapper>
      <Button label="download_app" />
    </RightWrapper>
  </MenuWrapper>
)

export default Menu
