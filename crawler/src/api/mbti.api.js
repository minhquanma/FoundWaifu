const { AM_CHARACTERS_URL } = require("../utils/const");
const axios = require("axios");
const { createMbtiAxiosInstance } = require("../services/mbti.http-service");
const { runSqlite } = require("../database");

const mbtiClient = createMbtiAxiosInstance();

// ?offset=0&limit=50&cid=8&pid=2&cat_id=8&property_id=2

// Fetch all animes
const fetchSubCategories = () => {
  mbtiClient
    .get("/subcategories", {
      params: {
        cat_id: 8,
      },
    })
    .then((data) => console.log(data.data));
};

const fetchCharactersBySubCatId = (subCatId) => {
  mbtiClient
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
    .then((data) => console.log(data.data));
};

module.exports = {
  fetchCharactersBySubCatId,
  fetchSubCategories,
};
