import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "../../services/api/fetchMovies";
import DetailPoster from "../common/DetailPoster";
import Layout from "../common/Layout";
import InfoSection from "../common/InfoSection";
import MoreDetails from "../common/MoreDetails";
import SectionCastCrew from "../common/SectionCastCrew";
import CastCrewCard from "../common/CastCrewCard";

const ViewDetails = () => {
  const [detail, setDetail] = useState({});
  const { movieId, type } = useParams();

  

  useEffect(() => {
    const fetchUserSearch = async () => {
      try {
        const detailFound = await fetchMovies(
          `${type}/${movieId}?append_to_response=credits`
        );
        setDetail(detailFound);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserSearch();
  }, []);

  return (
    <Layout>
      <div className="lg:max-w-full h-screen">
        <DetailPoster detail={detail} />

        <div className="lg:hidden max-w-[80%] mx-auto">
          <InfoSection detail={detail} isDark={false} />
        </div>
        <MoreDetails detail={detail} />
        {/* cast and crew container */}
       <SectionCastCrew detail={detail}/>
      </div>
    </Layout>
  );
};

export default ViewDetails;
