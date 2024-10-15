import React from "react";
import CastCrewCard from "./CastCrewCard";

const MoreDetails = ({ detail }) => {
  return (
    <div className=" max-w-[80%] mx-auto">
      <div className="p-3">
        <h1 className="font-cinzel font-bold p-2 mb-3 border-l-4 border-mutedred">
          More Detail
        </h1>

        <div className="border-b flex justify-between py-3">
          {detail.first_air_date ? (
            <p>First_Air_Date </p>
          ) : (
            <p>Release Date </p>
          )}
          {detail.first_air_date ? (
            <p>{detail.first_air_date}</p>
          ) : (
            <p>{detail.release_date}</p>
          )}
          <p></p>
        </div>

        {detail.last_air_date ? (
          <div className="border-b flex justify-between py-3">
            <p>Last_Air_Date</p>
            <p>{detail.last_air_date}</p>
            <p></p>
          </div>
        ) : (
          ""
        )}

        <div className="border-b flex justify-between py-3 overflow-ellipsis overflow-hidden">
          <p className="pr-9">Homepage</p>
          <a className="text-blue-900" href={detail.homepage}>
            {detail.homepage}
          </a>
          <p></p>
        </div>

        <div className="border-b flex justify-between py-3">
          <p className="pr-9">In-production</p>
          {detail.in_production ? <p>Yes</p> : <p>No</p>}
          <p></p>
        </div>

        {detail.number_of_seasons ? (
          <div className="border-b flex justify-between py-3">
            <p>Number of season</p>
            <p>{detail.number_of_seasons}</p>
            <p></p>
          </div>
        ) : (
          ""
        )}

        {detail.number_of_episodes ? (
          <div className="border-b flex justify-between py-3">
            <p>Number of episodes</p>
            <p>{detail.number_of_episodes}</p>
            <p></p>
          </div>
        ) : (
          ""
        )}

        <div className="border-b flex justify-between py-3">
          <p className="pr-9">Languages Spoken</p>
          {detail.spoken_languages &&
            detail.spoken_languages.map((language) => (
              <p key={language.iso_639_1}>{language.english_name}</p>
            ))}
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
