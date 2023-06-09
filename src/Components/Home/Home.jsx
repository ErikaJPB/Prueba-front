import "./Home.css";
import VideoComponent from "../VideoComponent/VideoComponent";
import Events from "../Events/Events";
import TheCrew from "../TheCrew/TheCrew";
import Form from "../Form/Form";

function Home() {
  return (
    <div>
      <VideoComponent />
      <div style={{ position: "relative" }}>
        <Events style={{ position: "absolute", top: "500px" }} />
        <TheCrew style={{ position: "absolute", top: "500px" }} />
        <Form style={{ position: "absolute", top: "500px" }} />
      </div>
    </div>
  );
}

export default Home;
