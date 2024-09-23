import React from "react";
import "./../subscribeComp/Subscribe.scss";
import { GoArrowRight } from "react-icons/go";

const Subscribe = () => {
  return (
    <div style={{ backgroundColor: "#f8f7f5" }}>
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
          <span style={{ width: "50vh" }}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input-box"
            />
          </span>
          <span style={{ position: "relative" }}>
            <input
              type="button"
              placeholder="Subscribe"
              value="Subscribe"
              className="btn-subscribe"
            />{" "}
            <span style={{ position: "absolute", top: "8px", right: "1px" }}>
              {/* <GoArrowRight style={{ color: "#fff", fontSize: "2vh" }} /> */}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
