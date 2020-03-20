import React from 'react'

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
      <span>The project</span>
      <span>Contribute</span>
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
