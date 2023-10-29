const { createJikanAxiosInstance } = require("../services/jikan.http-service");

const jikanClient = createJikanAxiosInstance();

const getAnimeSearch = (params) => {
  jikanClient
    .get("/anime", {
      params,
    })
    .then((res) => console.log(res.data[0]));
};

module.exports = {
  getAnimeSearch,
};
