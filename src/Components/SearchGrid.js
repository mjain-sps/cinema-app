import React from "react";
import "../CSS/grid.css";
import Rating from "./Rating";
import { useHistory } from "react-router-dom";
import LazyLoad from "./LazyLoad";

function SearchGrid({ moviesArray }) {
  const history = useHistory();
  return (
    <>
      {moviesArray.map((movie, idx) => {
        return (
          <div className="grid-container" key={idx}>
            {movie.results.map((d, index) => {
              return (
                <LazyLoad key={index} img={d}>
                  <div
                    className="grid-CTA"
                    onClick={() => history.push(`/${d.id}/${d.title}/details`)}
                  >
                    READ MORE
                  </div>
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

export default SearchGrid;
