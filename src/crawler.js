const { fetchAllAnimes, fetchCharactersBySubCatId } = require("./api/mbti.api");
const {
  insertAnimes,
  insertAllCharacters,
} = require("./services/crawler.service");

runCrawler();

async function runCrawler() {
  const animes = await fetchAllAnimes();

  //await insertAnimes(animes);

  const characters = [];

  // Fetch all characters of each anime
  for (const item of animes.slice(0, 5)) {
    const character = await fetchCharactersBySubCatId(item.sub_cat_id);

    characters.push(...character.profiles);
  }

  await insertAllCharacters(characters);
}
