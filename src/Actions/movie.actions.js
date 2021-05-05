import {
  FETCH_MOVIE_LOADING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  API_URL,
} from "../Constants";

import axios from "axios";
export const fetchMovie = (type, page) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MOVIE_LOADING });
    const { data } = await axios.get(
      `${API_URL}/${type}?api_key=9695e87530dcfc8431eee7bd9724178e&language=en-US&page=${page}`
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
