import React, {useEffect, useState} from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Landing/Hero";
import MovieCard from "../Components/Landing/MovieCard";
import Footer from "../Components/Footer";
const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("/data-movie.json")
      .then((response) => response.json())
      .then((data) => setMovies(data.movie_list))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);
  return (
    <div data-bs-theme="dark">
      <Navbar />
      <Hero />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Baru diupload</h2>
        <div className="row justify-content-center">
          {movies.map((movie, index) => (
            <MovieCard key={index} title={movie.title} image={movie.image} episodes={movie.episode} quality={movie.quality} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
