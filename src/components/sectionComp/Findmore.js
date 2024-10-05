import React from "react";
import "./Findmore.scss";

const Findmore = () => {
  return (
    <div className="find-out-more-container">
      <img
        src="\images\find-out-more-vector.png"
        className="find-out-more-vector-image"
        alt="find-more-image"
      />
      <div className="right-cta-image-index">
        <img src="\images\rightcta.png" width="80%" height="80%" alt=""/>
      </div>
      <div className="find-out-more-content-box">
        <div className="find-out-more-heading">
          <span>Lorem ipsum dolor</span> <span>sit amet consectetur</span>
        </div>
        <p className="find-out-more-content">
          <span>
            Lorem ipsum dolor sit amet consectetur. Consectetur sit morbi nunc
            quam{" "}
          </span>
          <span>
            {" "}
            non arcu. Elit imperdiet pharetra a eget consectetur diam praesent
            nec.{" "}
          </span>
          <span>
            Sagittis aliquam amet tempor leo. Ornare porta ut euismod enim
            viverra id{" "}
          </span>
          <span>
            {" "}
            tortor felis. Sed tempor felis turpis ut lorem viverra. Lorem
            vulputate{" "}
          </span>
          <span>
            {" "}
            pellentesque eu mauris habitant eros. Posuere mauris cursus in
            turpis sit enim{" "}
          </span>
          <span>tempus ultrices purus.</span>
        </p>
        <span>
          <button className="btn-find-more">Find out More</button>
        </span>
      </div>
    </div>
  );
};

export default Findmore;
