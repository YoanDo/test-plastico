import React from 'react'

import { Wrapper } from '../../hoc/layout/styles'
import { VideoWrapper } from './styles'

const Goals = () => (
  <Wrapper>
    <VideoWrapper>
      <iframe
        title="plastic origins"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/gJiBng0Mo_k?controls=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoWrapper>
  </Wrapper>
)
export default Goals
