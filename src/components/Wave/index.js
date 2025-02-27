import React from 'react';

import {
  PlainBlue,
  WaveContent,
  WaveImgBot,
  WaveImgTop,
  WaveWrapper
} from './styles';
import GetInvolved from '../GetInvolved';

const Wave = () => (
  <WaveWrapper>
    <WaveImgTop name="getInvolved" />
    <PlainBlue>
      <WaveContent>
        <GetInvolved />
      </WaveContent>
    </PlainBlue>
    <WaveImgBot />
  </WaveWrapper>
);

export default Wave;
