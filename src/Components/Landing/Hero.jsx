import React from "react";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url('/wallpaper.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
        paddingTop: "50px",
      }}>
      <div>
        <h1 className="text-primary fw-bold">BTN Movie</h1> {/* Changed to text-light */}
        <p className="text-danger">
          {" "}
          Tempatnya nonton <b>Gratis</b> dan <b>Full HD</b>
        </p>
      </div>
      <div
        style={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjusted to rgba for better control
        }}></div>
    </div>
  );
};

export default Hero;
