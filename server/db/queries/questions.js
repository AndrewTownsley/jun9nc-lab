const Query = require("../models");

const insertRecord = async (record) => {
  return Query("INSERT INTO questions SET ?", [record]);
};

const getRecords = async () => {
  return Query("SELECT * FROM questions");
};

module.exports = {
  insertRecord,
  getRecords
};
