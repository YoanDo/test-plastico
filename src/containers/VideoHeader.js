import React from 'react';
import { useSelector } from 'react-redux'
import { getUserLanguage } from "../redux/selectors/ui"

import VideoHeaderComponent from "../components/VideoHeroHeader"

const VideoHeader = () => {
  const lang = useSelector((state) => getUserLanguage(state))
  const videoSrc = lang === 'fr' ? 'https://res.cloudinary.com/dyowqp26l/video/upload/v1648754992/header_video_fr_icxvry.mp4' : 'https://res.cloudinary.com/dyowqp26l/video/upload/v1648755010/header_video_en_f9n7es.mp4'
  return (
    <VideoHeaderComponent videoSrc={videoSrc} />
  );
};

VideoHeader.propTypes = {

};

export default VideoHeader;