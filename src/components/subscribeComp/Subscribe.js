import React from "react";
import "./../subscribeComp/Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe-outer-container">
      <div className="subscribe-container-box">
        <div className="subscribe-container">
          {" "}
          <span className="subscribe-heading-name">
            Subscribe to Our Newsletter
          </span>
          <p className="subscribe-content">
            <span>
              Lorem ipsum dolor sit amet consectetur. Consectetur sit morbi nunc{" "}
            </span>
            <span>
              quam non arcu. Elit imperdiet pharetra a eget consectetur diam
            </span>{" "}
          </p>
        </div>
        <div className="email-btn-alignment">
          <span className="email-input-type-size">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input-box"
            />
          </span>
          <span>
            <input
              type="button"
              placeholder="Subscribe"
              value="Subscribe"
              className="btn-subscribe"
            />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
