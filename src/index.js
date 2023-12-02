const express = require("express");
const cors = require("cors");
const {
  getCharacterByIdApi,
  searchBarApi,
  getSuggestedCharsApi,
  getCharacterByAnimeIdApi,
  getCharacterByMbtiApi,
  getMutualCharacterApi
} = require("./controllers/mbti-controller");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/suggested/:mbti", getSuggestedCharsApi);
app.get("/characters/:id", getCharacterByIdApi);
app.get("/related-characters/:id", getCharacterByAnimeIdApi);
app.get("/characters-by-mbti/:mbti", getCharacterByMbtiApi);
app.get("/search-bar", searchBarApi);
app.get("/mutual-characters/:mbti", getMutualCharacterApi)

app.listen(8080, () => console.log(`Server listening on port: 8080`));
