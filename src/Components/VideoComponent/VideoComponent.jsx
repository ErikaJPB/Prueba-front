import React, { useState, useEffect } from "react";
import video from "../../assetssrc/final2.mp4";
import video1 from "../../assetssrc/final.mp4";
import "./VideoComponent.css";

function VideoComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 480px)");
    setIsMobile(mediaQuery.matches);
  }, []);

  return (
    <div className="video-container">
      {isMobile ? (
        <video
          src={video1}
          type="video/mp4"
          muted
          loop
          autoPlay
          playsInline
        ></video>
      ) : (
        <video
          src={video}
          type="video/mp4"
          muted
          loop
          autoPlay
          playsInline
        ></video>
      )}
    </div>
  );
}

export default VideoComponent;
