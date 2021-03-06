import {
  FETCH_MOVIE_LOADING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_SUCCESS_INFINITE_SCROLL,
  FETCH_MOVIE_ERROR_INFINITE_SCROLL,
  SEARCH_MOVIE_LOADING,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_SUCCESS,
  CLEAR_SEARCHED_MOVIE,
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
        movies: [action.payload],
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

export const searchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: [action.payload],
      };
    case SEARCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_SEARCHED_MOVIE:
      return {
        ...state,
        loading: null,
        movies: [],
        error: null,
      };
    default:
      return state;
  }
};
