import axios from "axios";

const access_token = 'Bearer Wookie2021';

export const fetchMovies = (searchParam) => {
    return axios.get("https://wookie.codesubmit.io/movies",
        {
            headers: {
                'Authorization': access_token
            }
        }
    );
};