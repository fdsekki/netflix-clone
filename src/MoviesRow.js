import React from 'react';
import axios from './axios'; /* when we have a default export, we can rename variables, Ex: from instance to axios */
import "./MoviesRow.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function MoviesRow(props) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");

  // A snippet of code which runs based on a specific condition/variable
  React.useEffect(() => {
    // if [] are blank, run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      // console.log(request); /* request.data.results */
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    /*
      whenever you use anything inside of a useEffect
      if there is any variable that is being pulled from outside,
      you have to include it inside of [], because it is dependent
      on that variable
    */
  }, [props.fetchUrl]);

  // console.log(movies)

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch(error => console.log(error));
    }
  }

  return(
    <div className="moviesrow">
      {/* title */}
      <h2>{props.title}</h2>

      {/* container -> posters */}
      <div className="moviesrow__posters">
        {/* several row__poster(s) */}
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`moviesrow__poster ${props.isLargeRow && "moviesrow__posterLarge"}`}
            src={`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default MoviesRow;
