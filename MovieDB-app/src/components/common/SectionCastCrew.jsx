import React from 'react'
import CastCrewCard from './CastCrewCard'

const SectionCastCrew = ({detail}) => {

  if (!detail.credits){
    return null
  }
  let credits = [...detail.credits.cast, ...detail.credits.crew];
  
  return (
    <div className=" max-w-[80%] mx-auto">
          <h1 className="font-cinzel font-bold p-2 mb-3 border-l-4 border-mutedred">
            Cast&Crew
          </h1>
          <div className="w-[100%] flex gap-2 overflow-x-scroll flex-nowrap">
          {credits.map((castCrew) => (
            <CastCrewCard key={castCrew.id} castCrew={castCrew}/>
            ))}
          </div>
        </div>
  )
}

export default SectionCastCrew
