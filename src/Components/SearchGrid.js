import React from "react";
import "../CSS/grid.css";
import Rating from "./Rating";
import { useSelector } from "react-redux";
import LazyLoad from "./LazyLoad";
import Loader from "../Components/Loader";
import Messages from "../Components/Messages";
function SearchGrid({ moviesArray }) {
  //React-Redux constants
  const searchedMovieFromState = useSelector((state) => state.search);
  const { movies } = searchedMovieFromState;
  return (
    <>
      {movies.map((movie, idx) => {
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

export default SearchGrid;
