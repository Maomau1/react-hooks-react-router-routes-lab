import React from "react"; 

function MovieCard({movie}){
    if(!movie){
        return <h1>Loading...</h1>
    }
    return(
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.time}min.</p>
            <ul>
                {movie.genres.map(genre=>(
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    )

}

export default MovieCard;