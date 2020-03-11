import React from 'react'

import { Links, MenuWrapper, SurfRiderRibbon, TopRibbon, LogoWrapper } from './styles'
import SurfRiderLogo from '../../assets/images/logos/surfrider.svg'
import Button from '../Button'

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
    <Button label="download_app" />
  </MenuWrapper>
)

export default Menu
