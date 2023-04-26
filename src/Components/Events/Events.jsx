/* eslint-disable react/no-unescaped-entities */
import "./Events.css";
function Events() {
  return (
    <div className="events-container">
      <img src="/assets/orangelogo.svg" alt="orangelogo" />
      <h1 className="events-title">Events</h1>
      <div className="photos-container-wrapper">
        <div className="photos-container">
          <img
            src="/assets/eventpic1.jpg"
            alt="eventpic1"
            className="event-pic"
          />
          <img
            src="/assets/eventpic2.jpg"
            alt="eventpic2"
            className="event-pic"
          />
          <img
            src="/assets/eventpic3.jpg"
            alt="eventpic3"
            className="event-pic"
          />
          <img
            src="/assets/eventpic4.jpg"
            alt="eventpic4"
            className="event-pic"
          />
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
