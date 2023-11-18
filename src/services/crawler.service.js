// @ts-noCheck
const sqlite3 = require("sqlite3").verbose();

/*
 Anime Entity
 id: number
 title: string
*/
const insertAnimes = (animes) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database("datafile.sqlite");
    db.serialize(() => {
      console.log(`Start inserting ${animes.length} records`);
      // WARNING: Drop table before inserting, to prevent duplicate data
      db.run("DROP TABLE IF EXISTS ANIME");

      db.run("CREATE TABLE ANIME (id NUM PRIMARY KEY, title TEXT)");

      const stmt = db.prepare("INSERT OR REPLACE INTO ANIME VALUES (?, ?)");

      for (const [index, anime] of animes.entries()) {
        stmt.run(anime.sub_cat_id, anime.subcategory);
      }

      stmt.finalize();

      console.log(`Inserted records ${animes.length}`);

      // db.each("SELECT id, text FROM CHARACTERS", (err, row) => {
      //   console.log(row);
      // });

      resolve();
    });

    db.close();
  });
};

/*
 Character Entity
 id: number
 personalityType: string
 name: string // profile_id
 animeId: number // sub_cat_id
 profileImageUrl: string // profile_image_url
 voteCount: number
*/
const insertAllCharacters = (characters) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database("datafile.sqlite");
    db.serialize(() => {
      console.log(`Start inserting ${characters.length} records`);
      // WARNING: Drop table before inserting, to prevent duplicate data
      db.run("DROP TABLE IF EXISTS CHARACTER");

      db.run(
        `CREATE TABLE CHARACTER (
          id NUM PRIMARY KEY,
          personalityType TEXT,
          name TEXT, 
          animeId NUM,
          profileImageUrl TEXT,
          voteCount NUM
        )`
      );

      const stmt = db.prepare(
        "INSERT OR REPLACE INTO CHARACTER VALUES (?, ?, ?, ?, ?, ?)"
      );

      for (const character of characters) {
        console.log(character);
        stmt.run(
          character.profile_id,
          // Only get the first 4 characters of personality type (XXXX type)
          character.personality_type.slice(0, 4),
          character.mbti_profile,
          character.sub_cat_id,
          character.profile_image_url,
          character.vote_count
        );
      }

      stmt.finalize();

      console.log(`Inserted records ${characters.length}`);

      resolve();
    });

    db.close();
  });
};

module.exports = {
  insertAnimes,
  insertAllCharacters,
};
