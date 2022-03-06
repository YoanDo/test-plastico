import React, { useEffect, useRef, useState } from 'react'
import { VideoContainer, Wrapper } from './styles'

const VideoHeroHeader = ({ videoSrc }) => {
  const videoRef = useRef()
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
      setFadeIn(true)
    }, 500)
  }, [])

  return (
    <Wrapper>
      <VideoContainer fadeIn={fadeIn}>
        <video
          ref={videoRef}
          controls={false}
          width="100%"
          loop
          muted
          disablePictureInPicture>
          <source
            src={videoSrc}
            type="video/mp4"
          />
          <img src="/images/headerBg.jpg" title="background header" />
        </video>
      </VideoContainer>
    </Wrapper>
  )
}

VideoHeroHeader.propTypes = {}

export default VideoHeroHeader
