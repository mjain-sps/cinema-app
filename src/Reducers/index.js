import { combineReducers } from "redux";
import { movieReducer, searchMovieReducer } from "./movie.reducers";
const rootReducer = combineReducers({
  movies: movieReducer,
  search: searchMovieReducer,
});
export default rootReducer;
