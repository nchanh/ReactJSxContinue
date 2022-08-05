import { forwardRef, useImperativeHandle, useRef } from 'react'
import videoTiktok from './videos/tiktok.mp4'

function Video(props, refVideo) {
  const thisRefVideo = useRef()

  useImperativeHandle(refVideo , () => ({
    play() {
      thisRefVideo.current.play()
    },
    pause() {
      thisRefVideo.current.pause()
    }
  }))

  return (
    <video
      ref={thisRefVideo}
      src={videoTiktok}
      width="240"
    ></video>
  )
}

export default forwardRef(Video)