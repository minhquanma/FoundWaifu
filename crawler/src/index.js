const { getAnimeSearch } = require("./api/jikan.api");
const { fetchSubCategories } = require("./api/mbti.api");

//fetchSubCategories();
//fetchCharactersBySubCatId(8778);
//runSqlite();

getAnimeSearch({
  q: "Onii-chan wa oshimai",
});
