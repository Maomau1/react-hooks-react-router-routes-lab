import React from "react";
import { movies } from "../data";
import MovieCard from "./movieCard";

function Movies() {
  const moviesToDisplay = movies.map(movie=>{
    return <MovieCard key={movie.title} movie={movie}/>})
  return <div>{/*{code here}*/}
    <h1>Movies Page</h1>
    {moviesToDisplay}
  </div>;
}

export default Movies;
