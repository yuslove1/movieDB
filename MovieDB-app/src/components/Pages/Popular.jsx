import React, { useState, useEffect } from "react";
import errorHandling from "../../utils/errorHandling";
import fetchMovies from "../../services/api/fetchMovies";
import ListHeader from "../common/ListHeader";
import LoadingState from "../common/LoadingState";
import MovieListContainer from "../common/MovieListContainer";
import NotFound from "./NotFound";
import Button from "../common/button";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [errorMsg, setErrorMsg] = useState({});
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState()

  const handleClick = () => {
    let newPage = page + 1;
    setPage(newPage);
  };

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const popularMovies = await fetchMovies(`movie/popular?page=${page}&media_type=movie`);
        const popularTv = await fetchMovies(`tv/popular?page=${page}&media_type=tv`);

        const combinedData = [
        //   ...popular,
          ...popularMovies.results,
          ...popularTv.results,
        ];
        setPopular(combinedData);
        setTotal(`${popularMovies.total_results + popularTv.total_results}`);
        setTotalPages(`${popularMovies.total_pages + popularTv.total_pages}`);

        
        setErrorMsg({}); //reset error message if successful
      } catch (error) {
        //Error handling
        setErrorMsg(errorHandling(error));
      }
      setLoading(false);
    };

    fetchPopular();
  }, [page, handleClick]);

  console.log(popular)

  // https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
  return (
    <div className="lg:max-w-[80%] mx-auto pt-8 mb-8">
      <ListHeader title="Popular" count={total} />

      <div>
        {loading ? (
          <LoadingState />
        ) : (
          <div className="h-fit">
            {popular && (
              <MovieListContainer data={popular} />
            )}
            {errorMsg.serverError ||
              (errorMsg.movieNotFound && <NotFound errorMsg={errorMsg} />)}
          </div>
        )}
      </div>

      {/* conditionally render see more Button */}
      <div className="m-5">
      {page < totalPages ? (
        <Button
          className=""
          text="See More"
          isRound={true}
          width="lg:w-[100%] w-[100%]"
          handleClick={handleClick}
        />
      ) : (
        ""
      )}
      </div>
      
    </div>
  );
};

export default Popular;
