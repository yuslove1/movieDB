import React from 'react';
import { Link } from 'react-router-dom';
import { MdMovie } from "react-icons/md";
import { GiTv } from "react-icons/gi";

const MoviesCard = ({movie}) => {

    const {poster_path, 
        name, 
        vote_average, 
        id, 
        first_air_date,
        release_date, 
        title} = movie;

        const media_type = movie.name ? 'tv' : 'movie';
    return (
        <Link to={`/detail/${media_type}/${id}`}>
        <div className="w-60 h-fit bg-transparent rounded-lg shadow-2xl relative shrink-0 border-mutedred flex flex-col">
            <div className={`${media_type === 'tv'? 'bg-myred' : 'bg-cyan'} absolute z-10 px-4 py-4 rounded-full top-2 left-2 text-lg font-roboto text-white`}>{Math.trunc(vote_average ? (vote_average*10) : (0))}{vote_average? <sup>%</sup> : ''} </div>
            <div className="w-full h-52 overflow-hidden rounded-tl-lg rounded-tr-lg relative">
                <img  src={ poster_path? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}` : "https://placehold.co/400"}  alt="Movie Poster" className="w-full h-full object-fit" />
                
            </div>
            <div className="p-4 text-center">
                <div>
                <h1 className="text-black text-sm text-pretty font-black font-roboto overflow-hidden overflow-ellipsis h-10">{name? name : title }</h1>
                <hr />
                <p className="text-gray-300 font-bold my-2">{first_air_date? first_air_date : release_date}</p>
                <hr />
                </div>
                   <div className={`font-roboto capitalize  px-4 py-2 mt-3 rounded-md text-white ${media_type === 'tv'? 'bg-myred' : 'bg-cyan'}`}> <p>{media_type}</p>  {media_type === 'tv'? (<GiTv className='inline'/>) : <MdMovie className='inline'/>}</div>
            </div>
        </div>
        </Link>
    );
};

// return (
//     <div className="w-52 h-auto bg-transparent rounded-lg shadow-2xl relative shrink-0 border-mutedred flex flex-col">
//       <div className={`${media_type === 'tv' ? 'bg-myred' : 'bg-cyan'} absolute z-10 px-4 py-4 rounded-tl-lg rounded-tr-lg text-lg font-roboto text-white`}>
//         {Math.trunc(vote_average ? (vote_average * 10) : 0)}{vote_average ? <sup>%</sup> : ''}
//       </div>
//       <div className="h-48 overflow-hidden rounded-tl-lg rounded-tr-lg relative">
//         <img src={poster_path ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}` : "https://placehold.co/400"} alt="Movie Poster" className="w-full h-full object-fit" />
//       </div>
//       <div className="p-4 text-center flex-1 flex flex-col justify-between">
//         <div>
//           <h1 className="text-black text-lg font-black font-roboto">{name ? name : title}</h1>
//           <hr />
//           <p className="text-gray-300 font-bold my-2">{first_air_date ? first_air_date : release_date}</p>
//           <hr />
//         </div>
//         <p className={`font-roboto capitalize inline-block px-4 py-2 mt-3 rounded-md text-white ${media_type === 'tv' ? 'bg-myred' : 'bg-cyan'}`}>{media_type}</p>
//       </div>
//     </div>
// )
// }

export default MoviesCard;
