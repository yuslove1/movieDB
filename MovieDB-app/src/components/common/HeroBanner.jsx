import React from 'react'
import SearchBar from './SearchBar'

const HeroBanner = ({randPath}) => {
  return (
    <div className="relative h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${randPath}')`,
          }}
        ></div>
        <div className="absolute inset-0"></div>

        {/* search part */}
        <div
          className="absolute inset-0 lg:max-w-[80%] mx-auto h-full my-auto flex flex-col justify-around bg-black bg-opacity-40 rounded-lg shadow-lg"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <div className=" mt-10">
            <h1 className="headerStyle">Welcome,</h1>
            <h1 className="headerStyle mb-5">
              to moviedb. Your home of entertainment
            </h1>

            <p className="font-roboto font-bold sm:text-lg lg:text-2xl italic text-myred text-center ">
              Search, Explore and discover
            </p>
          </div>
          <SearchBar />
        </div>
      </div>
  )
}

export default HeroBanner
