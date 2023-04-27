/* eslint-disable react/no-unescaped-entities */
import "./Events.css";
import orangelogo from "/src/assetssrc/orangelogo.svg";
import eventpic1 from "/src/assetssrc/eventpic1.jpg";
import eventpic2 from "/src/assetssrc/eventpic2.jpg";
import eventpic3 from "/src/assetssrc/eventpic3.jpg";
import eventpic4 from "/src/assetssrc/eventpic4.jpg";
function Events() {
  return (
    <div className="events-container">
      <img src={orangelogo} alt="orangelogo" />
      <h1 className="events-title">Events</h1>
      <div className="photos-container-wrapper">
        <div className="photos-container">
          <img src={eventpic1} alt="eventpic1" className="event-pic" />
          <img src={eventpic2} alt="eventpic2" className="event-pic" />
          <img src={eventpic3} alt="eventpic3" className="event-pic" />
          <img src={eventpic4} alt="eventpic4" className="event-pic" />
        </div>
      </div>

      <button className="event-button">More Events</button>
      <span className="event-description">
        Let's have fun, join us in our events. Find out more here.
      </span>
    </div>
  );
}

export default Events;
