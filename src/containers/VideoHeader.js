import React from 'react';
import { useSelector } from 'react-redux'
import { getUserLanguage } from "../redux/selectors/ui"

import VideoHeaderComponent from "../components/VideoHeroHeader"

const VideoHeader = () => {
  const lang = useSelector((state) => getUserLanguage(state))
  const videoSrc = `/videos/header_video_${lang === 'fr' ? 'fr' : 'en'}.mp4`
  return (
    <VideoHeaderComponent videoSrc={videoSrc} />
  );
};

VideoHeader.propTypes = {

};

export default VideoHeader;