import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie";
export const IMG_URL = "https://image.tmdb.org/t/p/original";

export const fetchMovies = async (type, page) => {
  try {
    const response = await axios.get(
      `${API_URL}/${type}?api_key=9695e87530dcfc8431eee7bd9724178e&language=en-US&page=${page}`
    );
    return response;
  } catch (error) {
    const errorMessage = error.response && error.response.data;
    return errorMessage;
  }
};
