import React, { useState, useEffect } from "react";
import video from "../../../public/assets/final2.mp4";
import video1 from "../../../public/assets/final.mp4";
import Overlay from "../Overlay/Overlay";
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
      <Overlay />
    </div>
  );
}

export default VideoComponent;
