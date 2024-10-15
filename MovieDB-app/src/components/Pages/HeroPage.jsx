import React, { useEffect, useState } from "react";
import Layout from "../common/Layout";
import SearchBar from "../common/SearchBar";
import HeroBanner from "../common/HeroBanner";
import ListHeader from "../common/ListHeader";
import MovieScrollContainer from "../common/MovieScrollContainer";
import fetchMovies from "../../services/api/fetchMovies";
import LoadingState from "../common/LoadingState";
import NotFound from "./NotFound";
import errorHandling from "../../utils/errorHandling";

const HeroPage = () => {
  const [trending, setTrending] = useState([]);
  const [randPath, setRandPath] = useState("");
  const [errorMsg, setErrorMsg] = useState({})
  const [loading, setLoading] = useState(true)

  // Get random Number
  function random(len) {
    return Math.floor(Math.random() * len.length);
  }

  // calling fetchMovies for today trending movie and the heropage backdrop
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const trends = await fetchMovies("trending/all/day");
        setTrending(trends.results);

        //get a random image to display as background
        //and if there's error fetching use a default image
        const randpth =
          trends.results && trends.results.length > 0
            ? trends.results[random(trends.results)].backdrop_path ||
              "/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg"
            : "/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg";
        setRandPath(randpth);
        
        setErrorMsg({}) //reset error message if successful
      } catch (error) {
        //Error handling
        setErrorMsg(errorHandling(error))
      }
          setLoading(false)
    };

    fetchTrendingMovies();
  }, []);

  return (
    <Layout>
     <HeroBanner randPath={randPath}/>
      <div className="lg:max-w-[80%] mx-auto h-full">
        <div className="pt-4 mb-1">
          {trending.length > 0 && (
            <ListHeader title="Trending Today" count={trending.length} />
          )}
        </div>
        {/* conditionally redering trending movies */}
    
    {loading ? (<LoadingState />) : (
     <div className="h-fit">
      {trending.length > 0 && <MovieScrollContainer trending={trending} />}
      {errorMsg.serverError && <NotFound errorMsg={errorMsg} />}
     </div>
    )
    }
      </div>

    </Layout>
  );
};

export default HeroPage;