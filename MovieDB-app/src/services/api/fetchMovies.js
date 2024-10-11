import axios from "axios";

const apiKey = process.env.MOVIEDB_APP_API_KEY;
let pageNum = 1;
const baseUrl = 'https://api.themoviedb.org/3';


const options = {
method: 'GET',
params: {
    api_key: apiKey,
    page: pageNum,
    
},
headers: {
    Accept: 'application/json',
    // 'Authorization': `Bearer ${apiKey}` 
}
}

const fetchMovies = async (endpoint) => {
try {
    const response = await axios.get(`${baseUrl}/${endpoint}`, options)
    return response.data.results;
}catch (error) {
    console.error('Error fetching movies:', error);
    return [];
}
}

export default fetchMovies;