import React from "react"
import videoSectionStyles from "../../styles/videoSection.module.scss"

const VideoSection = () => {
  return (
    <div className={videoSectionStyles.videoSection}>
      <h2>
        Posłuchaj piosenki autorstwa{" "}
        <a
          href="https://www.youtube.com/watch?v=92p6kervcak"
          target="_blank"
          rel="noopener noreferrer"
        >
          Luizy Kukulińskiej
        </a>
        , aby zrozumieć piękno myszojelenia
      </h2>
      <div className={videoSectionStyles.videoContainer}>
        <div className={videoSectionStyles.videoWrapper}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/92p6kervcak"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="myszojelen"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
