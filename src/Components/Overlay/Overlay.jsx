import { useState } from "react";
import "./Overlay.css";

function Overlay() {
  const [buttonText, setButtonText] = useState("Join Us");

  return (
    <div className="overlay-container">
      <div className="orange-circle-container">
        <div className="orange-circle-wrapper">
          <img
            className="orange-circle"
            src="/assets/orangeoval.svg"
            alt="Orange Circle"
          />

          <div className="overlay-comment-container">
            <div className="icon-comment-container">
              <img
                className="icon-comment "
                src="/assets/comment.svg"
                alt="comment"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="join-us-container">
        <button
          className="join-us-button"
          onClick={() => setButtonText("Yay!")}
        >
          <img className="heart-icon" src="/assets/favorite.svg" alt="Heart" />
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Overlay;
