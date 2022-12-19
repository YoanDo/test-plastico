import React from 'react';
import { useSelector } from 'react-redux';
import { getUserLanguage } from '../redux/selectors/ui';

import VideoHeaderComponent from '../components/VideoHeroHeader';

const VideoHeader = () => {
  const lang = useSelector((state) => getUserLanguage(state));
  const videoEN =
    'https://plasticostorageprod.blob.core.windows.net/public/header_video_en.mp4';
  const videoFR =
    'https://plasticostorageprod.blob.core.windows.net/public/header_video_fr.mp4';
  const videoSrc = lang === 'fr' ? videoFR : videoEN;
  return <VideoHeaderComponent videoSrc={videoSrc} />;
};

VideoHeader.propTypes = {};

export default VideoHeader;
