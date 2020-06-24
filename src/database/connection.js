const sqlite3 = require('sqlite3');
const path = require('path');

const dbSource = path.resolve(__dirname, 'db.sqlite');
const db = new sqlite3.Database(dbSource, (err) => {
    err ? console.log(err.message): console.log("Connected to the database!");
})

module.exports = db;