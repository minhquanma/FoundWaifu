const { fetchAllAnimes, fetchCharactersBySubCatId } = require("./api/mbti.api");
const {
  insertAnimes,
  insertAllCharacters,
} = require("./services/crawler.service");

runCrawler();

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}
async function runCrawler() {
  const animes = await fetchAllAnimes();

  //await insertAnimes(animes);

  const length = 400;
  // Fetch all characters of each anime
  for (let index = 300; index < length; index++) {
    const characters = [];
    const percentage = (((index + 1) / length) * 100).toFixed(2);
    console.log(`fetch character ${index + 1} of ${length}, ${percentage}%`);
    const character = await fetchCharactersBySubCatId(animes[index].sub_cat_id);

    characters.push(...character.profiles);
    await sleep();
    await insertAllCharacters(characters);
  }
}
