import React from "react";

const MovieCard = ({title, image, episodes, quality}) => {
  return (
    <div className="col-md-3 mb-4" id="list">
      <div className="card bg-dark text-light movie-card position-relative border border-light" style={{height: "500px", borderRadius: "0.5rem"}}>
        <img src={image} className="card-img-top" alt={title} style={{borderRadius: "0.5rem 0.5rem 0 0", height: "600px", objectFit: "cover"}} />
        <div className="card-body d-flex flex-column justify-content-between" style={{height: "300px"}}>
          <div>
            <div className="d-flex justify-content-between">
              <h5 className="card-title text-center fw-bold">{title}</h5>
              <p className="text-danger fw-bold">2024</p>
            </div>
            <div className="d-flex justify-content-between">
              <span className="badge bg-danger mb-2">{quality}</span>
              <span className="text-muted mb-2">{episodes}</span>
            </div>
          </div>
          <div className="text-center mt-3">
            <a href={`/watch/${title}`} className="btn btn-danger w-100">
              Tonton Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
