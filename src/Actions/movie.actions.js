import {
  FETCH_MOVIE_LOADING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  API_URL,
  FETCH_MOVIE_LOADING_INFINITE_SCROLL,
  FETCH_MOVIE_SUCCESS_INFINITE_SCROLL,
  FETCH_MOVIE_ERROR_INFINITE_SCROLL,
  SEARCH_MOVIE_LOADING,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_ERROR,
  API_KEY,
  CLEAR_SEARCHED_MOVIE,
} from "../Constants";

import axios from "axios";

export const fetchMovie = (type, page) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MOVIE_LOADING });
    const { data } = await axios.get(
      `${API_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    dispatch({ type: FETCH_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIE_ERROR,
      payload:
        error.response && error.response.data.status_message
          ? error.response.data.status_message
          : error.status_message,
    });
  }
};

//Action to get next page, thus causing an infinte scrolling effect
export const infiniteScrollAction = (type, page) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MOVIE_LOADING_INFINITE_SCROLL });
    const { data } = await axios.get(
      `${API_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    console.log("from actions", data);
    dispatch({ type: FETCH_MOVIE_SUCCESS_INFINITE_SCROLL, payload: data });
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: FETCH_MOVIE_ERROR_INFINITE_SCROLL,
      payload:
        error.response && error.response.data.status_message
          ? error.response.data.status_message
          : error.status_message,
    });
  }
};

//Action to get search results
export const searchMovie = (searchKeywords) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_MOVIE_LOADING });
    const { data } = await axios.get(
      `${API_URL}/search/movie/?api_key=${API_KEY}&language=en-US&query=${searchKeywords}&page=1&include_adult=false`
    );
    //dispatch success action

    dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEARCH_MOVIE_ERROR,
      payload:
        error.response && error.response.data.status_message
          ? error.response.data.status_message
          : error.status_message,
    });
  }
};

export const clearSearched = () => async (dispatch) => {
  dispatch({ type: CLEAR_SEARCHED_MOVIE });
};
