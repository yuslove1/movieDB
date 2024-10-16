import React, { useState, useEffect } from "react";
import Layout from "../common/Layout";
import ListHeader from "../common/ListHeader";
import MovieListContainer from "../common/MovieListContainer";
import { useNavigate, useParams } from "react-router-dom";
import fetchMovies from "../../services/api/fetchMovies";
import Button from "../common/Button";
import errorHandling from "../../utils/errorHandling";
import LoadingState from "../common/LoadingState";
import NotFound from "./NotFound";

const SearchResult = () => {
  const [searchFound, setSearchFound] = useState({});
  const [errorMsg, setErrorMsg] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const { title } = useParams();

  //handle load more
  const handleClick = () => {
    let newPage = page + 1;
    setPage(newPage);
    navigate(`/search-result/${title}`);
  };

  useEffect(() => {
    const fetchUserSearch = async () => {
      try {
        const searchResult = await fetchMovies(
          `search/multi?query=${title}&page=${page}`
        );
        setSearchFound(searchResult);
        setErrorMsg({}); //reset error message if successful
      } catch (error) {
        //Error handling
        setErrorMsg(errorHandling(error));
      }
      setLoading(false);
    };

    fetchUserSearch();
  }, [page, title]);

  return (
    <Layout>
      <div className="lg:max-w-[80%] mx-auto pt-8 mb-8">
        <ListHeader title="Search Result" count={searchFound.total_results} />

        {searchFound.results ? (
          <div className="text-center p-4 font-cinzel font-medium">
            <p>
              <span className="text-myred">{searchFound.total_results}</span>{" "}
              Relevant <span className="text-myred font-black">{title}</span>{" "}
              Result
            </p>
          </div>
        ) : (
          ""
        )}

        {/* conditionally rendering for result and not found*/}
        {loading ? (
          <LoadingState />
        ) : (
          <div className="h-fit">
            {searchFound.results && (
              <MovieListContainer data={searchFound.results} />
            )}
            {errorMsg.serverError ||
              (errorMsg.movieNotFound && <NotFound errorMsg={errorMsg} />)}
          </div>
        )}
      </div>

      {/* conditionally render see more Button */}
      {page < searchFound.total_pages ? (
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
    </Layout>
  );
};

export default SearchResult;
