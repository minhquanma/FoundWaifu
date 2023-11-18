const { getCharactersSearch } = require("../api/jikan.api");
const { getCharacterById } = require("../services/mbti.services");

const getCharacterByIdApi = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getCharacterById(id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

const getRecommmendationApi = async (req, res) => {
  const mbti = req.query.mbti;
};

const searchBarApi = async (req, res) => {
  const search = req.query.search;

  try {
    const response = await getCharactersSearch({ q: search });
    res.send({
      jikan: response,
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getCharacterByIdApi,
  getRecommmendationApi,
  searchBarApi,
};
