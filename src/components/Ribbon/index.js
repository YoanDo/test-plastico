import React from 'react'
import { string } from 'prop-types'

// import LogoSurfRider from '../Logo'
import { BotRibbon, Logo, SurfRiderRibbon, TopRibbon } from './styles'

const Ribbon = ({ top, left, right }) => (
  <SurfRiderRibbon top={top} right={right} left={left}>
    <TopRibbon>
      <span>
        Proudly <br />
        powered by
      </span>
    </TopRibbon>
    <BotRibbon>
      <Logo />
    </BotRibbon>
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
