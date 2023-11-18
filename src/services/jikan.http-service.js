const axios = require("axios");
const { JIKAN_REST_URL } = require("../utils/const");

const createJikanAxiosInstance = () => {
  const instance = axios.create({
    baseURL: JIKAN_REST_URL,
  });

  instance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return instance;
};

module.exports = {
  createJikanAxiosInstance,
};
