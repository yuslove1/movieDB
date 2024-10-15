import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState({ title: "" }); //incase of expanding the search inputs
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  //Optimazing performace(preventing unnecessaty re-renders)
  //By memoizing event handlers and values.
  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setSearchTerm((prevTerm) => ({
        ...prevTerm,
        [name]: value,
      }));
    },
    [setSearchTerm]
  );

  // handle searchTerm submission
  const handleSubmit = useCallback((event) => {
      event.preventDefault();
      //make sure userInput isn't empty before navigate to the result page
      //And pass the userInput to the SearchResult component
      if (searchTerm.title.trim().length > 0) {
        navigate(`/search-result/${searchTerm.title}`);
        setSearchTerm({title:""})
      } else {
        setErrorMsg("input field can not be empty");
      }
    },
    [searchTerm, navigate] 
  );

  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            name="title"
            value={searchTerm.title}
            onChange={handleChange}
            className="block w-full p-4 ps-10 text-sm text-white  border rounded-2xl bg-transparent "
            placeholder="Search Movies & Tv's..."
          />
          <button
            type="submit"
            className="text-mywhite absolute end-2.5 bottom-2.5 focus:ring-4  focus:ring-myred font-medium rounded-lg text-sm px-4 py-2 bg-darkcyan hover:bg-cyan hover:text-black transition ease-in-out duration-300 delay-100"
          >
            Search
          </button>
        </div>
        <p className="text-center text-red-500 font-roboto font-bold border rounded-lg">
          {errorMsg}
        </p>
      </form>
    </div>
  );
};

export default SearchBar;
