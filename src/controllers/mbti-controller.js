const { getCharactersSearch } = require("../api/jikan.api");
const {
  getCharacterById,
  searchCharacter,
  getCharacterByMbti,
  getCharacterByAnimeId,
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

const createRandomSet = (length, inputSet = new Set()) => {
  const randomizedIndex = Math.floor((Math.random() * 100) % 20);

  inputSet.add(randomizedIndex);

  if (inputSet.size < length) {
    createRandomSet(length, inputSet);
  }

  return inputSet;
};

const getSuggestedCharsApi = async (req, res) => {
  const mbti = req.params.mbti;

  try {
    const characters = await getCharacterByMbti(mbti);
    if (characters) {
      const selectedResults = characters.slice(0, 20);
      const randomSet = createRandomSet(4);
      const results = [...randomSet].map((index) => selectedResults[index]);

      res.send(results);
    } else {
      res.send(characters);
    }
  } catch (err) {
    res.send(err);
  }
};

const getCharacterByAnimeIdApi = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getCharacterByAnimeId(id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

const getCharacterByMbtiApi = async (req, res) => {
  const mbti = req.params.mbti;

  try {
    const characters = await getCharacterByMbti(mbti);
    res.send(characters);
  } catch (err) {
    res.send(err);
  }
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
  getSuggestedCharsApi,
  getCharacterByAnimeIdApi,
  getCharacterByMbtiApi,
  searchBarApi,
};
