const { createMbtiAxiosInstance } = require("../services/mbti.http-service");

const mbtiClient = createMbtiAxiosInstance();

// ?offset=0&limit=50&cid=8&pid=2&cat_id=8&property_id=2

// Fetch all animes
const fetchAllAnimes = () => {
  return mbtiClient
    .get("/subcategories", {
      params: {
        cat_id: 8,
      },
    })
    .then((response) => response.data);
};

const fetchCharactersBySubCatId = (subCatId) => {
  return mbtiClient
    .get("/profiles", {
      params: {
        pid: 2,
        cid: 8,
        property_id: 2,
        offset: 0,
        limit: 500,
        cat_id: 8,
        sub_cat_id: subCatId,
      },
    })
    .then((response) => response.data);
};

module.exports = {
  fetchCharactersBySubCatId,
  fetchAllAnimes,
};
