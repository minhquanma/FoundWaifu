const axios = require("axios");
const { AM_CHARACTERS_URL } = require("./const");

const createMbtiAxiosInstance = () => {
  const instance = axios.create({
    baseURL: AM_CHARACTERS_URL,
  });
  return instance;
};

module.exports = {
  createMbtiAxiosInstance,
};
