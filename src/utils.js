const axios = require("axios");
const { AM_CHARACTERS_URL } = require("./utils/const");

const createMbtiAxiosInstance = () => {
  const instance = axios.create({
    baseURL: AM_CHARACTERS_URL,
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
  return instance;
};

module.exports = {
  createMbtiAxiosInstance,
};
