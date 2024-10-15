import axios from "axios";

const apiKey = process.env.MOVIEDB_APP_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  params: {
    api_key: apiKey,
    media_type: "tv",
  },
  headers: {
    Accept: "application/json",
    // 'Authorization': `Bearer ${apiKey}`
  },
};

const fetchMovies = async (endpoint) => {
  try {
    const response = await axios.get(`${baseUrl}/${endpoint}`, options);
    return response.data;
  } catch (error) {
    if (error.response && error.response.this.status === 400) {
      throw new Error("Movie not found");
    } else {
      throw new Error("Server error occurred");
    }
  }
};

export default fetchMovies;
