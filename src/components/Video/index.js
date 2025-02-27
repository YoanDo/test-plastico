import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Wrapper } from '../../hoc/layout/styles';
import { LeftSide, RightSide, Row, VideoWrapper } from './styles';

const Goals = () => (
  <Wrapper>
    <Row>
      <LeftSide>
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
      </LeftSide>
      <RightSide>
        <span>
          <FormattedMessage id="video_antoine" />
        </span>
      </RightSide>
    </Row>
  </Wrapper>
);
export default Goals;
