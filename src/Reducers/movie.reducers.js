import {
  FETCH_MOVIE_LOADING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_SUCCESS_INFINITE_SCROLL,
  FETCH_MOVIE_ERROR_INFINITE_SCROLL,
} from "../Constants/index";

const initialState = {
  loading: null,
  movies: [],
  error: null,
};
export const movieReducer = (state = initialState, action) => {
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
        movies: [...state.movies, action.payload],
      };

    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_MOVIE_SUCCESS_INFINITE_SCROLL:
      return {
        ...state,
        loading: false,
        movies: [...state.movies, action.payload],
      };

    case FETCH_MOVIE_ERROR_INFINITE_SCROLL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
