import React, {useEffect, useState} from "react";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/data-movie.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredMovies = data.movie_list.filter((movie) => movie.landing_page);
        setMovies(filteredMovies);
      });
  }, []);

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
      <div className="carousel-indicators">
        {movies.map((movie, index) => (
          <button
            type="button"
            key={index}
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to={index}
            className={`${index === 0 ? "active" : ""}`}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            style={{backgroundColor: "white"}}></button>
        ))}
      </div>

      <div className="carousel-inner">
        {movies.map((movie, index) => (
          <div key={movie.title} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="position-relative">
              <img src={movie.image} className="d-block w-100 carousel-image img-fluid" alt={movie.title} style={{height: "600px", objectFit: "cover"}} />
              <div className="dark-overlay position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}></div>

              <div className="carousel-caption text-center position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
                <h5 className="fw-bold fs-1 text-white mb-3">{movie.title}</h5>
                <p className="fw-bold badge bg-danger mb-4">{movie.quality}</p>
                <a className="btn btn-danger px-4 py-2 hover-shadow" href={`/watch/${movie.title}`}>
                  Tonton Sekarang
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
