import React, { useEffect, useState, useRef } from "react";
import SlideShow from "../Components/SlideShow/SlideShow";
import NowPlaying from "../Components/NowPlaying";
import Grid from "../Components/Grid";
import Messages from "../Components/Messages";
import Loader from "../Components/Loader";
import { IMG_URL } from "../Constants/index";
import "../CSS/homescreen.css";
import { fetchMovie, infiniteScrollAction } from "../Actions/movie.actions";
import { useSelector, useDispatch } from "react-redux";
import "../CSS/paginate.css";
import SearchGrid from "../Components/SearchGrid";
function HomeScreen({ match, location, history }) {
  const dispatch = useDispatch();
  const moviesFromState = useSelector((state) => state.movies);
  const searchedMovieFromState = useSelector((state) => state.search);
  const {
    loading: searchLoading,
    movies: searchedMovies,
    error: searchError,
  } = searchedMovieFromState;
  const { loading, error, movies } = moviesFromState;

  //useState constants
  const [slideShowArray, setSlideShowArray] = useState(null);
  const [visible, setVisible] = useState(false);
  //declare refs
  const ref = useRef();

  //1st useEffect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          console.log(entry);
          setVisible(true);
        }
      },
      { root: null, rootMargin: "500px", threshold: [0] }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

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
      const sortedOnPopularity = data.results.sort((a, b) => {
        if (parseInt(a.popularity) < parseInt(b.popularity)) {
          return 1;
        } else {
          return -1;
        }
      }); //function ends

      const tempArray = [];
      sortedOnPopularity.slice(5).forEach((e, index) => {
        tempArray.push({
          id: index,
          pic: `${IMG_URL}${e.backdrop_path}`,
        });
      });
      setSlideShowArray(tempArray);
    };
    if (movies && movies.length > 0) {
      createSlideShowArray(movies[0]);
    }
  }, [movies]);

  useEffect(() => {
    if (visible) {
      setVisible(false);
      const lastPage = parseInt(movies[movies.length - 1].page) + 1;
      dispatch(
        infiniteScrollAction(
          match.params.type ? match.params.type : "now_playing",
          lastPage
        )
      );
    }
  }, [visible]);

  return (
    <div>
      {error || searchError ? (
        <Messages>{error || searchError}</Messages>
      ) : searchedMovies && searchedMovies.length > 0 ? (
        <SearchGrid
          moviesArray={
            searchedMovies && searchedMovies.length > 0 ? searchedMovies : null
          }
        />
      ) : movies && movies.length ? (
        <div className="homescreen-wrapper">
          <div className="homescreen-slideshow">
            <SlideShow image={slideShowArray && slideShowArray} auto={true} />
          </div>

          <div className="nowplaying_pagination--wrapper">
            <div className="homescreen-nowplaying">
              <NowPlaying />
            </div>
            {/* This is the pagination section  */}
            <div className="homescreen-pagination">
              <div className="pagination--wrapper">
                <span>
                  {" "}
                  {movies && movies[0].page}-{movies && movies[0].total_pages}
                </span>
                <button
                  onClick={() => {
                    const page = parseInt(movies[0].page) - 1;
                    history.push({
                      pathname: location.pathname,
                      search: `?p=${page}`,
                    });
                  }}
                  disabled={movies && movies[0].page === 1}
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    const page = parseInt(movies[0].page) + 1;
                    history.push({
                      pathname: location.pathname,
                      search: `?p=${page}`,
                    });
                  }}
                  disabled={movies && movies[0].page === movies[0].total_pages}
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
            <Grid moviesArray={movies && movies.length > 0 ? movies : null} />
          </div>

          <div ref={ref}></div>
        </div>
      ) : loading || searchLoading ? (
        <Loader></Loader>
      ) : (
        ""
      )}
    </div>
  );
}

export default HomeScreen;
