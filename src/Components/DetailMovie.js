import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMG_URL } from "../Constants";
import Loader from "../Components/Loader";
import Messages from "../Components/Messages";
function DetailMovie({ match }) {
  //useState constants
  const [movieDetail, setMovieDetail] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (match && match.params.id) {
      try {
        const { data } = axios.get(
          `${API_URL}/movie/${match.params.id}?api_key=${API_KEY}&language=en-US`
        );
        setMovieDetail(data);
      } catch (error) {
        setError(
          error.response && error.response.data.status_message
            ? error.response.data.status_message
            : error.status_message
        );
      }
    }
  }, [match]);
  console.log(match.params);

  return (
    <>
      {error ? (
        <Messages>{error}</Messages>
      ) : movieDetail ? (
        <div>SEE MOVIE DETAILS HERE</div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default DetailMovie;
