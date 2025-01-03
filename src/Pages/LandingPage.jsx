import React, {useEffect, useState} from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Landing/Hero";
import MovieCard from "../Components/Landing/MovieCard";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";

const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Semua Genre");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6; // Display 6 movies per page

  useEffect(() => {
    fetch("/data-movie.json")
      .then((response) => response.json())
      .then((data) => {
        // Find Squid Game Season 2 and separate it from the rest of the movies
        const squidGame = data.movie_list.find((movie) => movie.title === "Squid Game Season 2");
        const otherMovies = data.movie_list.filter((movie) => movie.title !== "Squid Game Season 2");

        // Sort all movies by id in descending order
        const sortedMovies = otherMovies.sort((a, b) => b.id - a.id);

        // Combine Squid Game Season 2 at the top and the rest sorted by id
        setMovies([squidGame, ...sortedMovies]);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const genres = ["Semua Genre", "Komedi", "Horror", "Survival", "Romantis", "Drama", "Kisah Nyata", "Series", "Fiksi"];

  const filterMoviesByGenre = (genre) => {
    if (genre === "Semua Genre") {
      return movies;
    }
    return movies.filter((movie) => movie.genre.includes(genre));
  };

  const currentMovies = filterMoviesByGenre(selectedGenre).slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage);

  const totalPages = Math.ceil(filterMoviesByGenre(selectedGenre).length / moviesPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div data-bs-theme="dark">
      <Navbar />
      <Hero />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Daftar Film</h2>

        <div className="d-flex justify-content-center mb-4 flex-wrap">
          {genres.map((genre) => (
            <button key={genre} className={`btn btn-${selectedGenre === genre ? "danger" : "outline-danger"} mx-2 my-2`} onClick={() => setSelectedGenre(genre)}>
              {genre}
            </button>
          ))}
        </div>

        <div className="row justify-content-center">
          {currentMovies.map((movie, index) => (
            <MovieCard key={index} title={movie.title} image={movie.image} episodes={movie.episode} quality={movie.quality} />
          ))}
        </div>

        {/* Pagination */}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mt-4">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a className="page-link" href="javascript:;" onClick={() => handlePageChange(currentPage - 1)}>
                Previous
              </a>
            </li>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                <a className="page-link" href="javascript:;" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </a>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <a className="page-link" href="javascript:;" onClick={() => handlePageChange(currentPage + 1)}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
