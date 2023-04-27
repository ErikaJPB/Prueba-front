import React from "react";
import "./Form.css";
import img from "../../../src/assetssrc/online-communication.png";

function Form() {
  return (
    <div className="form-container">
      <div className="form-content">
        <form>
          <h1>
            <span className="join">Join </span>
            <span className="us">us.</span>
          </h1>
          <span className="description-join">
            In the sea of life, there is nothing to fear if you have God as your
            captain. Join our crew!
          </span>
          <div className="form-placeholder">
            <input type="text" id="fullname" placeholder="Full Name" />
          </div>
          <div className="form-placeholder">
            <input type="email" id="email" placeholder="Email Address" />
          </div>
          <div className="form-placeholder">
            <input
              type="number"
              id="cellphone"
              placeholder="Cell Phone Number"
            />
          </div>
          <div className="form-placeholder">
            <textarea
              name="message"
              placeholder="Message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="button-wrapper">
            <button className="button-form">Sent</button>
          </div>
        </form>
      </div>
      <div className="image-container">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Form;
