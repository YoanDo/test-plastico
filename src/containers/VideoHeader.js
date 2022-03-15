import React from 'react';
import { useSelector } from 'react-redux'
import { getUserLanguage } from "../redux/selectors/ui"

import VideoHeaderComponent from "../components/VideoHeroHeader"

const VideoHeader = () => {
  const lang = useSelector((state) => getUserLanguage(state))
  const videoSrc = lang === 'fr' ? 'https://res.cloudinary.com/dyub4bz6x/video/upload/v1647377496/header_video_fr_hiop1o.mp4' : 'https://res.cloudinary.com/dyub4bz6x/video/upload/v1647377500/header_video_en_cvqkcc.mp4'
  return (
    <VideoHeaderComponent videoSrc={videoSrc} />
  );
};

VideoHeader.propTypes = {

};

export default VideoHeader;