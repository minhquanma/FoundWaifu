const express = require("express");
const cors = require("cors");
const {
  getCharacterByIdApi,
  searchBarApi,
  getCharactersByMbtiApi,
} = require("./controllers/mbti-controller");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/mbti/:mbti", getCharactersByMbtiApi);
app.get("/characters/:id", getCharacterByIdApi);
app.get("/search-bar", searchBarApi);

app.listen(8080, () => console.log(`Server listening on port: 8080`));
