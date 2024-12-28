import React, {useEffect, useState} from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Landing/Hero";
import Footer from "../Components/Footer";
import {useParams} from "react-router-dom";

const Watch = () => {
  const {title} = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch("/data-movie.json")
      .then((response) => response.json())
      .then((data) => {
        const movie = data.movie_list.find((movie) => movie.title === title);
        setMovieData(movie);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [title]);

  const encodeBase64 = (string) => {
    return btoa(string);
  };

  if (!movieData) return <div>Loading...</div>;

  return (
    <div data-bs-theme="dark">
      <Navbar />
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-md-4">
            <img src={movieData.image} alt={movieData.title} className="img-fluid rounded" />
          </div>
          <div className="col-md-8">
            <h1>{movieData.title}</h1>
            <p dangerouslySetInnerHTML={{__html: movieData.description}}></p>
          </div>
        </div>
        <h3>Daftar Episode</h3>
        <div className="row justify-content-start">
          {movieData.data.map((episode, index) => (
            <div className="col-md-8 mb-4" key={index}>
              <div className="card bg-dark text-white movie-card position-relative">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h5 className="card-title">
                    Episode {episode.episode}: {episode.title}
                  </h5>
                  <a href={`/stream/${encodeBase64(episode.iframe_link)}`} className="btn btn-danger">
                    Tonton
                  </a>
                </div>
                <p className="mt-2">{episode.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;
