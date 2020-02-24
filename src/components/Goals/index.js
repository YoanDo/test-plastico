import React from 'react'
import Fade from 'react-reveal/Fade'
import Goal from './components/Goal'

import { GoalsWrapper } from './styles'

const Goals = () => (
  <GoalsWrapper>
    <Fade bottom>
      <Goal label="collect" />
    </Fade>
    <Fade bottom delay={100}>
      <Goal label="analyse" />
    </Fade>
    <Fade bottom delay={200}>
      <Goal label="broadcast" />
    </Fade>
  </GoalsWrapper>
)
export default Goals
