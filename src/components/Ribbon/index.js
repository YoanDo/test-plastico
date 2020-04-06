import React from 'react'
import { string } from 'prop-types'

import { LogoWrapper, SurfRiderRibbon, TopRibbon } from './styles'
import SurfRiderLogo from '../../assets/images/logos/surfrider.svg'

const Ribbon = ({ top, left, right }) => (
  <SurfRiderRibbon top={top} right={right} left={left}>
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
)

Ribbon.defaultProps = {
  top: '0px',
  right: '0px',
  left: '0px',
}

Ribbon.propTypes = {
  top: string,
  right: string,
  left: string,
}

export default Ribbon
