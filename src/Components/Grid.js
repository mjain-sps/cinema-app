import React from "react";
import "../CSS/grid.css";
import Rating from "./Rating";
import { IMG_URL } from "../API_SERVICE/movies.service";
function Grid({ image }) {
  return (
    <>
      <div className="grid-container ">
        {image &&
          image.map((d, index) => {
            return (
              <div
                key={index}
                className="grid-element"
                style={{
                  backgroundImage: `url(${IMG_URL}/${d.backdrop_path})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="movie-title">{d.title}</div>
                <Rating stars={3} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Grid;
