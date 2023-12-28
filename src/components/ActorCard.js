import React from "react";

function ActorCard({actor}){
    const moviesList=actor.movies.map(movie=>{
        return <li key={movie}>{movie}</li>
    })
    return <div>
        <h2>{actor.name}</h2>
        <ul>{moviesList}</ul>

    </div>
}

export default ActorCard;