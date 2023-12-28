import React from "react";

function DirectorCard({director}){
    const moviesList = director.movies.map(movie=>{
        return <li key={movie} >{movie}</li>
    })
    return(
        <div>
            <h2>{director.name}</h2>
            <ul>{moviesList}</ul>
        </div>
    )
}

export default DirectorCard;