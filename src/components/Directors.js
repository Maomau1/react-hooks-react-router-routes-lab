import React from "react";
import { directors } from "../data";
import DirectorCard from "./DirectorCard";

function Directors() {
  const directorList= directors.map(director=>{
    return <DirectorCard key={director.name} director={director}/>
  })
  return <div>{/*{code here}*/}
    <h1>Directors Page</h1>
    <>{directorList}</>
    
  </div>;
}

export default Directors;
