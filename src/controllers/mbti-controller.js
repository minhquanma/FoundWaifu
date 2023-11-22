const { getCharactersSearch } = require("../api/jikan.api");
const {
  getCharacterById,
  searchCharacter,
  getCharacterByMbti,
} = require("../services/mbti.services");

const getCharacterByIdApi = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getCharacterById(id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

const getCharactersByMbtiApi = async (req, res) => {
  const mbti = req.params.mbti;

  try {
    const result = await getCharacterByMbti(mbti);
    if (result) {
      // TODO: return random 4 items with the most voteCount
    }
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
    const jikanData = await getCharactersSearch({ q: search });
    const mbtiData = await searchCharacter({ name: search });
    res.send({
      jikan: jikanData,
      mbti: mbtiData,
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getCharacterByIdApi,
  getCharactersByMbtiApi,
  getRecommmendationApi,
  searchBarApi,
};
