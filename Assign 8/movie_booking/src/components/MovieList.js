import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

const images = {
  movie1: require("../assets/pu2.jpg"),
  movie2: require("../assets/mu.jpg"),
  movie3: require("../assets/bj.jpg"),
  movie4: require("../assets/m2.jpg"),
  movie5: require("../assets/ma.jpg"),
  movie6: require("../assets/ui.jpg"),
  movie7: require("../assets/sr.jpg"),
  movie8: require("../assets/bb3.jpg"),
  
};


const movies = [
  { id: 1, name: "Pushpa 2", imageKey: "movie1" },
  { id: 2, name: "Mufasa: The Lion King", imageKey: "movie2" },
  { id: 3, name: "Baby John", imageKey: "movie3" },
  { id: 4, name: "Moana 2", imageKey: "movie4" },
  { id: 5, name: "Marco", imageKey: "movie5" },
  { id: 6, name: "UI", imageKey: "movie6" },
  { id: 7, name: "The Sabarmati Report", imageKey: "movie7" },
  { id: 8, name: "Bhool Bhulaiyaa 3", imageKey: "movie8" },
  
  
  // Add more movies up to 20
];


const MovieList = () => {
  return (
    <div className="movie-list-container">
      <header className="header">
        <h1>BookMyMovie</h1>
      </header>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={images[movie.imageKey]} alt={movie.name} />
            <h3>{movie.name}</h3>
            <Link to={`/details/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;