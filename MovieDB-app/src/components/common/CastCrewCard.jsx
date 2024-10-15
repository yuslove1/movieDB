import React from "react";

const CastCrewCard = ({castCrew}) => {
    const {profile_path, 
        name, 
        id,
        character,
        known_for_department} = castCrew;

        const img = "/240_F_867248676_OENptXrUyitODRDTfz4B430jTa9Nb4bl.jpg"
  
    
  return (
    <div className="w-40 h-fit bg-transparent shadow-2xl relative shrink-0 flex flex-col border border-black text-center justify-center items-center">
      <div className=" w-full h-52 overflow-hidden">
        <img
          src={ profile_path? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path}` : "https://placehold.co/500"}
          alt="cast image"
          className="w-full h-full object-fit"
        />
      </div>
      <div className="">
        <h1 className="font-roboto font-bold text-sm h-10 overflow-hidden overflow-ellipsis">{name}</h1>
        <h1 className="font-roboto font-light italic text-xs">{`${character ? character : known_for_department }`}</h1>
      </div>
    </div>
  );
};


export default CastCrewCard;
