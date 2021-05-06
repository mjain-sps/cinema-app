import {
  FETCH_MOVIE_LOADING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  API_URL,
  FETCH_MOVIE_LOADING_INFINITE_SCROLL,
  FETCH_MOVIE_SUCCESS_INFINITE_SCROLL,
  FETCH_MOVIE_ERROR_INFINITE_SCROLL,
} from "../Constants";

import axios from "axios";
export const fetchMovie = (type, page) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MOVIE_LOADING });
    const { data } = await axios.get(
      `${API_URL}/${type}?api_key=9695e87530dcfc8431eee7bd9724178e&language=en-US&page=${page}`
    );
    console.log("from actions", data);
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

export const infiniteScrollAction = (type, page) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MOVIE_LOADING_INFINITE_SCROLL });
    const { data } = await axios.get(
      `${API_URL}/${type}?api_key=9695e87530dcfc8431eee7bd9724178e&language=en-US&page=${page}`
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
