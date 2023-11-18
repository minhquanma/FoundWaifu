const { createJikanAxiosInstance } = require("../services/jikan.http-service");

const jikanClient = createJikanAxiosInstance();

const getAnimeSearch = (params) => {
  return jikanClient
    .get("/anime", {
      params,
    })
    .then((res) => res.data);
};

const getCharactersSearch = (params) => {
  return jikanClient
    .get("/characters", {
      params,
    })
    .then((res) => res.data);
};

module.exports = {
  getAnimeSearch,
  getCharactersSearch,
};
