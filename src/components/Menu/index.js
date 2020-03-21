import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'

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
      <Link activeClass="active" to="project" spy smooth duration={500} offset={100}>
        <span>The project</span>
      </Link>
      <Link activeClass="active" to="getInvolved" spy smooth duration={500} offset={-100}>
        <span>Contribute</span>
      </Link>
      <span>Data</span>
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
