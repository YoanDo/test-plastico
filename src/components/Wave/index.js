import React from 'react'

import { PlainBlue, WaveContent, WaveWrapper } from './styles'
import GetInvolved from '../GetInvolved'

const Wave = () => (
  <WaveWrapper>
    <svg width="1440px" height="213px" viewBox="0 0 1440 213" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="wave-(3)" fill="#0073BE">
          <path
            d="M0,53 L80,37 C160,21 320,-11 480,5 C640,21 800,85 960,106.3 C1120,128 1280,106 1360,95.7 L1440,85 L1440,213 L1360,213 C1280,213 1120,213 960,213 C800,213 640,213 480,213 C320,213 160,213 80,213 L0,213 L0,53 Z"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
    <PlainBlue>
      <WaveContent>
        <GetInvolved />
      </WaveContent>
    </PlainBlue>
    <svg width="1440px" height="223px" viewBox="0 0 1440 223" version="1.1">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="wave-(2)" fill="#0073BE">
          <path
            d="M0,160 L80,144 C160,128 320,96 480,112 C640,128 800,192 960,213.3 C1120,235 1280,213 1360,202.7 L1440,192 L1440,0 L1360,0 C1280,0 1120,0 960,0 C800,0 640,0 480,0 C320,0 160,0 80,0 L0,0 L0,160 Z"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
  </WaveWrapper>
)

export default Wave
