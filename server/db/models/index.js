const mysql = require("mysql");

const config = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "codinghelp",
};

const Connection = mysql.createPool(config);

const Query = (query, values) => {
  return new Promise((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = Query;
