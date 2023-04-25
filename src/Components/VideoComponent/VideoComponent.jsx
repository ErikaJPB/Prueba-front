import "./VideoComponent.css";
import video from "/public/assets/final2.mp4";

function VideoComponent() {
  return (
    <div className="video-container">
      <video
        src={video}
        type="video/mp4"
        muted
        loop
        autoPlay
        playsInline
      ></video>
    </div>
  );
}

export default VideoComponent;
