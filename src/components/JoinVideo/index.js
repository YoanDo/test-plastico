import { string } from 'prop-types';
import React from 'react';
import { VideoWrapper } from './styles';

const JoinVideo = ({ url }) => (
  <VideoWrapper>
    <iframe
      title="plastic origins"
      width="100%"
      height="100%"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </VideoWrapper>
);

JoinVideo.propTypes = {
  url: string
};

export default JoinVideo;
