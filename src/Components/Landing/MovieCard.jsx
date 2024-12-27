import React from "react";

const MovieCard = ({title, image, description, episodes}) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-dark text-white movie-card position-relative">
        <img src={image} className="card-img-top" alt={title} />
        <span className="badge">{episodes} eps</span>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" dangerouslySetInnerHTML={description}></p>
          <a href={`/watch/${title}`} className="btn btn-danger w-100">
            Tonton Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
