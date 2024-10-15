import React from 'react'
import { MdMovie } from "react-icons/md";
import { GiTv } from "react-icons/gi";
import getGenreColor from '../../utils/GenreColor';

const InfoSection = ({detail, isDark}) => {

    
  return (
    <div className={`p-4  h-full ${isDark ? 'text-white' : 'text-black'} mx-auto lg:bg-black lg:bg-opacity-10 overflow-hidden`}>
            <div className="text-center">
              <h1 className="font-cinzel text-4xl font-black">{detail.name ? detail.name : detail.title}</h1>
              <h2 className="font-roboto text-xl font-bold text-gray-500">{detail.original_name ? detail.original_name : detail.original_title }</h2>
              <p className="font-roboto italic">{detail.tagline}</p>
              
            </div>

            <div className="m-3 w-full">
                {detail.name? <GiTv className='inline rounded-full w-14 h-10 text-white bg-darkcyan'/> : <MdMovie className='inline rounded-full w-14 h-10 text-white bg-myred'/>} 

              {detail.genres &&
                detail.genres.map((genre) => {
                  return (
                    <div
                      key={genre.id}
                      className={`rounded-full font-roboto font-bold m-2 inline-block ${getGenreColor(
                        genre.name
                      )} p-2`}
                    >
                      {genre.name}
                    </div>
                  );
                })}
            </div>
            <div className=" pt-2">
              <p>{detail.overview}</p>
            </div>
          </div>
  )
}

export default InfoSection
