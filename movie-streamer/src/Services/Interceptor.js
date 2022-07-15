// Authorization: Bearer Wookie2021

const Environment = {
    activeProfile: "DEV",
    DEV: {
        url: "https://wookie.codesubmit.io",
    },
};

const getBaseURL = () => {
    return Environment[Environment.activeProfile].url;
};

axios.interceptors.request.use(
    function (config) {
        const authToken = 'Wookie2021';
        debugger;
        config.headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            ...config.headers
        };
        config.baseUrl = getBaseURL();
        config.url = `${getBaseURL()}${config.url}`
        if (authToken) {
            config.headers = {
                Authorization: `Bearer ${authToken}`,
                ...config.headers,
            };
        }
        return config;
    },
    function (error) {
        console.error("axios request error ", error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.error("axios request error ", error);
        return Promise.reject(error);
    }
);