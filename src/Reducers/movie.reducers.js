import {
  FETCH_MOVIE_LOADING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
} from "../Constants/index";

export const movieReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };

    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
