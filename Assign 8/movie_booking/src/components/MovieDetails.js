import React from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetails.css";

const images = {
  movie1: require("../assets/pu2.jpg"),
  movie2: require("../assets/mu.jpg"),
  movie3: require("../assets/bj.jpg"),
  movie4: require("../assets/m2.jpg"),
  movie5: require("../assets/ma.jpg"),
  movie6: require("../assets/ui.jpg"),
  movie7: require("../assets/sr.jpg"),
  movie8: require("../assets/bb3.jpg")
};

const movies = [
  { id: 1, name: "Pushpa 2",imageKey: "movie1", description: "Pushpa 2: The Rule picks up from the explosive events of the first part, following Pushpa`s meteoric rise as he expands his red sandalwood empire beyond borders. As tensions escalate with rival factions and the authorities, his growing ambitions draw him into intense confrontations and political upheavals." },
  { id: 2, name: "Mufasa: The Lion King",imageKey: "movie2", description: "Mufasa: The Lion King enlists Rafiki to relay the legend of the unlikely rise of the beloved king of the Pride Lands, introducing an orphaned cub called Mufasa, a sympathetic lion named Taka - the heir to a royal bloodline - and their expansive journey alongside an extraordinary group of misfits." },
  { id: 3, name: "Baby John",imageKey: "movie3", description: "Atlee`s Baby John, starring Varun Dhawan, Jackie Shroff, Wamiqa Gabbi and Keerthy Suresh, is a high-octane action thriller that follows a fearless cop leading a double life to protect his daughter from a deadly underworld." },
  { id: 4, name: "Moana 2",imageKey: "movie4", description: "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she`s ever faced." },
  { id: 5, name: "Marco",imageKey: "movie5", description: "Adattu is one of the most renowned gold-trading families in Kerala. Unexpectedly, a mysterious incident shakes the Adattu family. George, the head of the family, sets out to uncover the truth and find those responsible. At the same time, his younger brother, Marco, embarks on the same quest but through a different Path. This forms the core of Marco, an intense Violent action-packed drama." },
  { id: 6, name: "UI",imageKey: "movie6", description: "The world leaders gifted U & I with...Global warming, Inflation, COVID-19, Unemployment, AI and Wars. The World 2040." },
  { id: 7, name: "The Sabarmati Report",imageKey: "movie7", description: "Inspired by true events that took place in the `Sabarmati Express` on the morning of 27 Feb 2002." },
  { id: 8, name: "Bhool Bhulaiyaa 3",imageKey: "movie8", description: "Gear up to tickle your funny bones with some thrill. The gates of `haveli` will now open again for Bhool Bhulaiyaa 3!" },
  

];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div className="movie-list-container">
      <header className="header">
        <h1>BookMyMovie</h1>
      </header>
    <div className="movie-details-container">
      <h1>{movie.name}</h1>
      <img src={images[movie.imageKey]} alt={movie.name} />
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>
        <button>Book Seat</button>
      </Link>
    </div>
    </div>

  );
};

export default MovieDetails;