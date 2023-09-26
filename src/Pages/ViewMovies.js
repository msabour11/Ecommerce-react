

// export default ViewMovies;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="card">
      {movieDetails ? (
        <div className="card-body">
          <h1 className="card-title">{movieDetails.title}</h1>
          <img 
            src={movieDetails.image}
            alt={`${movieDetails.title} Poster`}
            className="card-img-top"
            style={{ maxHeight: "500px", width: "500px" }}
          />
          <p className="card-text">Rating: {movieDetails.title}</p>
          <p className="card-text">Description: {movieDetails.overview}</p>
          <p className="card-text">Release Date: {movieDetails.release_date}</p>
          <p className="card-text">Runtime: {movieDetails.runtime} minutes</p>
          <p className="card-text">Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
          <p className="card-text">Production Companies: {movieDetails.production_companies.map((company) => company.name).join(", ")}</p>
          <p className="card-text">Production Countries: {movieDetails.production_countries.map((country) => country.name).join(", ")}</p>
          <p className="card-text">Tagline: {movieDetails.tagline}</p>
          {/* Add other details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetails;
