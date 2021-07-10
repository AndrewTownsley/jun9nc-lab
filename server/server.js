const express = require("express");
const morgan = require("morgan");
const apiRouter = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", apiRouter);

app.use("*", (req, res, next) => {
  try {
    res.status(404).json({ msg: "Couldn't find what you're looking for.." });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.log(err)
  res
    .status(err.status || 500)
    .json({ name: err.name, msg: err.message || "An error occurred" });
});

app.listen(3001, () => console.log("Server listening on port 3001..."));
