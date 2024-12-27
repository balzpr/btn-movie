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
      <Hero />
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
        <div className="row justify-content-center">
          {movieData.data.map((episode, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card bg-dark text-white movie-card position-relative">
                <img src={movieData.image} className="card-img-top" alt={movieData.title} />
                <span className="badge">Episode {episode.episode}</span>
                <div className="card-body">
                  <h5 className="card-title">{episode.title}</h5>
                  <a href={`/stream/${encodeBase64(episode.iframe_link)}`} className="btn btn-danger w-100 mt-2" rel="noopener noreferrer">
                    Tonton Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Watch;
