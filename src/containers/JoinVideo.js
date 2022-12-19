import React from 'react';
import { useSelector } from 'react-redux';
import { getUserLanguage } from '../redux/selectors/ui';

import JoinVideoComponent from '../components/JoinVideo';

const JoinVideo = () => {
  const lang = useSelector((state) => getUserLanguage(state));
  const videoEN = 'https://www.youtube.com/embed/nUrq7J-fiz0';
  const videoFR = 'https://www.youtube.com/embed/hLCT34H7BnY';
  const videoSrc = lang === 'fr' ? videoFR : videoEN;
  return <JoinVideoComponent url={videoSrc} />;
};

JoinVideo.propTypes = {};

export default JoinVideo;
