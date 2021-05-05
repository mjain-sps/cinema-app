import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../CSS/rating.css";
function Rating({ stars }) {
  return (
    <React.Fragment>
      {stars && (
        <div className="rating--wrapper">
          <span className={stars >= 1 ? "rated-star" : ""}>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "10px" }} />
          </span>
          <span className={stars >= 2 ? "rated-star" : ""}>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "10px" }} />
          </span>
          <span className={stars >= 3 ? "rated-star" : ""}>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "10px" }} />
          </span>
          <span className={stars >= 4 ? "rated-star" : ""}>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "10px" }} />
          </span>
          <span className={stars === 5 ? "rated-star" : ""}>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "10px" }} />
          </span>
        </div>
      )}
    </React.Fragment>
  );
}

export default Rating;
