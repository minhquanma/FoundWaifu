const runSqlite = () => {
  const sqlite3 = require("sqlite3").verbose();
  const db = new sqlite3.Database("datafile.sqlite");

  db.serialize(() => {
    db.run("CREATE TABLE MBTI (MBTI_ID TEXT)");

    const stmt = db.prepare("INSERT INTO MBTI VALUES (?)");
    for (let i = 0; i < 10; i++) {
      stmt.run("MBTI_ID" + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
      console.log(row);
    });
  });

  db.close();
};

const insertSubCategory = ({ sub_cat_id, subcategory, alt_subcategory }) => {};
module.exports = {
  runSqlite,
};
