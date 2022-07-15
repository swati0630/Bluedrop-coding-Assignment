import axios from "axios";

const access_token = 'Bearer Wookie2021';

export const fetchDetails = (searchParam) => {
    return axios.get(`https://wookie.codesubmit.io/movies?q=${searchParam}`,
        {
            headers: {
                'Authorization': access_token
            }
        }
    );
};