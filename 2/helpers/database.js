const sqlite = require('sqlite3').verbose();
const dbsource = "db.sqlite";

const Connection = new sqlite.Database(dbsource, (err) => {
  if (err) {
    console.log(err.message);
    throw err;
  } else {
    console.log('Connected to the sqlite');
  }
})

module.exports = Connection;