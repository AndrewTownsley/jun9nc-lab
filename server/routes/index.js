const express = require("express");
const { insertRecord, getRecords } = require("../db/queries/questions");

const router = express.Router();

router.get("/test", (req, res, next) => {
  try {
    res.status(200).json({ msg: "Working" });
  } catch (error) {
    next(error);
  }
});

router.get("/records", async (req, res, next) => {
  try {
    let data = await getRecords();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/records", async (req, res, next) => {
  try {
    let body = req.body;
    let data = await insertRecord(body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
