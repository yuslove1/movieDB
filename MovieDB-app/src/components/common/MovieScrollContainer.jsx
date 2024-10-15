import React from "react";
import MoviesCard from "./MoviesCard";
const MovieScrollContainer = ({trending = []}) => {
  return (
    <div className="max-w-full overflow-x-scroll bg-white border-b border-myred py-2 px-4">
      <div className="flex gap-2">
       {trending.map((movie) =>(
        <MoviesCard key={movie.id} movie={movie}/>
       ))}
      </div>
    </div>
  );
};

export default MovieScrollContainer;
