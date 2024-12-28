import React from "react";

const Hero = () => {
  return (
    <div
      className="hero d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url('/wallpaper.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        color: "white",
      }}>
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker overlay for better text visibility
        }}></div>
      <div className="content position-relative z-index-1">
        <h1 className="display-4 fw-bold">BTN Movie</h1>
        <p className="lead">Tonton film dan serial favoritmu dengan kualitas terbaik</p>
        <a className="btn btn-danger btn-lg mt-3" href="#list">
          Jelajahi Sekarang
        </a>
      </div>
    </div>
  );
};

export default Hero;
