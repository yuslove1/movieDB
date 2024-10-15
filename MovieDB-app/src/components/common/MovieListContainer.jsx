import React from 'react'
import MoviesCard from './MoviesCard'

const MovieListContainer = ({data = []}) => {
  return (
    <div className='max-w-full'>
        <div className='mx-auto sm:px-4 place-items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5'>
        {data.map((movie) =>(
        <MoviesCard key={movie.id} movie={movie}/>
       ))}
        </div>
   
    </div>
  )
}

export default MovieListContainer
