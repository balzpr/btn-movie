import React, {useEffect, useState} from "react";
import Navbar from "../Components/Navbar";
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
        {/* Full-Width Movie Poster */}
        <div className="row mb-5">
          <div className="col-12">
            <img
              src={movieData.image}
              alt={movieData.title}
              className="img-fluid rounded-3 shadow-lg"
              style={{
                objectFit: "cover",
                height: "500px",
                width: "100%",
                borderRadius: "0.5rem",
              }}
            />
          </div>
        </div>

        {/* Movie Details */}
        <div className="row mb-5">
          <div className="col-md-8">
            <h1 className="text-light">{movieData.title}</h1>
            <p className="text-muted" dangerouslySetInnerHTML={{__html: movieData.description}}></p>
          </div>
        </div>

        {/* Episodes Section */}
        <h3 className="text-light mb-4">Daftar Episode</h3>
        <div className="row">
          {movieData.data.map((episode, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div
                className="card border border-secondary text-light rounded-3 shadow-sm movie-card position-relative"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  minHeight: "150px", // Set minimum height for uniformity
                }}>
                <div className="card-body">
                  {/* Episode Details */}
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={episode.thumbnail || movieData.image}
                      alt={`Episode ${episode.episode}`}
                      className="img-fluid rounded-3"
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <div className="ms-3">
                      <h5 className="card-title">
                        Episode {episode.episode}: {episode.title}
                      </h5>
                    </div>
                  </div>
                  {/* Episode Description */}
                  <p className="text-muted">{episode.description}</p>
                  {/* Full-Width Tonton Button */}
                  <a
                    href={`/stream/${encodeBase64(episode.iframe_link)}`}
                    className="btn btn-danger w-100 py-2"
                    style={{
                      fontWeight: "600",
                      borderRadius: "0.5rem",
                    }}>
                    Tonton Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Watch;
