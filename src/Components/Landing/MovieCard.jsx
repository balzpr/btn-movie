import React from "react";

const MovieCard = ({title, image, episodes, quality}) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div
        className="card bg-dark text-light border border-secondary rounded-3 shadow-sm movie-card"
        style={{
          transition: "transform 0.3s ease-out",
          height: "100%",
        }}>
        <img
          src={image}
          alt={title}
          className="card-img-top rounded-3"
          style={{
            height: "250px",
            objectFit: "cover",
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="card-body p-4">
          <h5
            className="card-title text-center fw-bold"
            style={{
              fontSize: "18px",
              color: "#fff",
            }}>
            {title}
          </h5>
          <div className="d-flex justify-content-center align-items-center mb-2">
            <span
              className="badge bg-danger me-2"
              style={{
                color: "#fff",
              }}>
              {quality}
            </span>
            <span className="text-muted" style={{color: "#b0b0b0"}}>
              {episodes} Episodes
            </span>
          </div>
          <div className="text-center">
            <a
              href={`/watch/${title}`}
              className="btn btn-danger w-100 py-2"
              style={{
                borderRadius: "5px",
                fontWeight: "600",
                fontSize: "14px",
                textTransform: "uppercase",
                backgroundColor: "#f44336",
                color: "#fff",
                transition: "background-color 0.3s ease",
              }}>
              Tonton Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
