import React from "react";
import "../CSS/grid.css";
import Rating from "./Rating";
import LazyLoad from "./LazyLoad";
function Grid({ moviesArray }) {
  return (
    <>
      {moviesArray.map((movie, idx) => {
        return (
          <div className="grid-container" key={idx}>
            {movie.results.map((d, index) => {
              return (
                <LazyLoad key={index} img={d}>
                  <div className="movie-title">{d.title}</div>
                  <Rating stars={3} />
                </LazyLoad>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default Grid;
