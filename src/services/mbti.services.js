const sqlite3 = require("sqlite3").verbose();

const getCharacterById = (id) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database("datafile.sqlite");

    // const query = `SELECT CHARACTER.*, ANIME.TITLE 
    //                 FROM CHARACTER 
    //                 INNER JOIN ANIME ON CHARACTER.ANIMEID = ANIME.ID 
    //                 WHERE ID = ?`;

    const query = `SELECT DISTINCT * FROM CHARACTER WHERE ID = ?`

    db.all(query, [id], (err, rows) => {
      if (err) {
        throw err;
      }
      resolve(rows[0]);
    });

    // close the database connection
    db.close();
  });
};


const getCharacterByAnimeId = (id) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database("datafile.sqlite");

    const query = `SELECT DISTINCT * FROM CHARACTER WHERE ANIMEID = ?`;

    db.all(query, [id], (err, rows) => {
      if (err) {
        throw err;
      }
      resolve(rows);
    });

    db.close();
  });
};

const getCharacterByMbti = (mbti) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database("datafile.sqlite");

    const query = `SELECT DISTINCT * 
                  FROM CHARACTER
                  WHERE PERSONALITYTYPE LIKE ?
                  ORDER BY VOTECOUNT DESC`;

    db.all(query, [mbti], (err, rows) => {
      if (err) {
        throw err;
      }
      resolve(rows);
    });

    // close the database connection
    db.close();
  });
};

const searchCharacter = ({ name }) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database("datafile.sqlite");

    const query = `SELECT DISTINCT * FROM CHARACTER WHERE NAME LIKE ?`;

    db.all(query, [`%${name}`], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });

    // close the database connection
    db.close();
  });
};

module.exports = {
  getCharacterById,
  getCharacterByMbti,
  searchCharacter,
  getCharacterByAnimeId,
};
