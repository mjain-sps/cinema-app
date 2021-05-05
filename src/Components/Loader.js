import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../CSS/loader.css";
function Loader() {
  return (
    <>
      <div className="loader--wrapper">
        <div className="loader-spinner">
          <FontAwesomeIcon icon={faSpinner} />
        </div>
      </div>
    </>
  );
}

export default Loader;
