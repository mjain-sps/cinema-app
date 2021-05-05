import React, { useEffect, useState } from "react";
import SlideShow from "../Components/SlideShow/SlideShow";
import NowPlaying from "../Components/NowPlaying";
import Pagination from "../Components/Pagination";
import Grid from "../Components/Grid";
import Messages from "../Components/Messages";
import Loader from "../Components/Loader";
import { IMG_URL } from "../Constants/index";
import "../CSS/homescreen.css";
import { fetchMovie } from "../Actions/movie.actions";
import { useSelector, useDispatch } from "react-redux";
function HomeScreen({ match, location, history }) {
  console.log(history);

  const dispatch = useDispatch();
  const moviesFromState = useSelector((state) => state.movies);
  const { loading, error, movies } = moviesFromState;

  //useState constants
  const [slideShowArray, setSlideShowArray] = useState(null);
  const [pageNumber, setPageNumber] = useState(movies && movies.page);
  //useEffect
  useEffect(() => {
    dispatch(
      fetchMovie(
        match.params.type ? match.params.type : "now_playing",
        location.search ? location.search.split("=")[1] : "1"
      )
    );
  }, [dispatch, match]);

  useEffect(() => {
    const createSlideShowArray = (data) => {
      const workableArray = data.results.slice(5);
      const tempArray = [];
      workableArray.forEach((e, index) => {
        tempArray.push({
          id: index,
          pic: `${IMG_URL}${e.backdrop_path}`,
        });
      });
      setSlideShowArray(tempArray);
    };
    if (movies && movies.results) {
      createSlideShowArray(movies);
    }
  }, [movies]);

  return (
    <>
      {error ? (
        <Messages>{error}</Messages>
      ) : loading ? (
        <Loader></Loader>
      ) : (
        <div className="homescreen-wrapper">
          <div className="homescreen-slideshow">
            <SlideShow image={slideShowArray && slideShowArray} auto={true} />
          </div>

          <div className="nowplaying_pagination--wrapper">
            <div className="homescreen-nowplaying">
              <NowPlaying />
            </div>

            <div className="homescreen-pagination">
              <div className="pagination--wrapper">
                <span>
                  {" "}
                  {movies && movies.page}-{movies && movies.total_pages}
                </span>
                <button
                  onClick={() => setPageNumber(pageNumber - 1)}
                  disabled={pageNumber === 1}
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    setPageNumber(pageNumber + 1);
                  }}
                  disabled={movies && pageNumber === movies.total_pages}
                >
                  Next
                </button>
              </div>

              {/* <Pagination
                maxPages={movies && movies.total_pages}
                currentPage={movies && movies.page}
                currentPath={location.pathname}
                history={history}
              /> */}
            </div>
          </div>
          <div className="homescreen-grid">
            <Grid image={movies && movies.results} />
          </div>
        </div>
      )}
    </>
  );
}

export default HomeScreen;
