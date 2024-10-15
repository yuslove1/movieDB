import React from "react";
import InfoSection from "./InfoSection";

const DetailPoster = ({ detail }) => {
  //   const { poster_path, } = detail;
  const defaultPath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";


  return (
    // <div className='h-96 w-full relative border border-solid'>
    //   <img className='w-full  h-full object-fill' src={`${defaultPath}${poster_path}`} alt="" />
    // </div>

    <div className="relative h-[40%] lg:h-[50%]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${defaultPath}${detail.backdrop_path}')`,
        }}
      ></div>
      <div className="absolute inset-0"></div>

      {/* search components */}
      <div
        //  my-auto flex flex-col justify-around
        className="absolute inset-0 lg:max-w-[80%] mx-auto h-full flex justify-center gap-10"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <div className="h-full sm:w-[40%] lg:w-[35%] relative  flex-shrink-0">
          <img
            className="w-full h-full object-fill"
            src={`${defaultPath}${detail.poster_path}`}
            alt=""
          />
        </div>

        {/* side-component only shows on larger screen */}
        <div className=" hidden lg:block w-[60%]">
        <InfoSection detail={detail} isDark={true}/>
        </div>
      </div>
    </div>
  );
};

export default DetailPoster;
