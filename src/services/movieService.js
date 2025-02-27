import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getMoviesData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/onTheaterMovies`);
        return response.data;
    } catch (error) {
        console.error('Error fetching on theater movies:', error);
        throw error;
    }
};

