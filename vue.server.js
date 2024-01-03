//initializing setting
const path = require("path");

const express = require("express");
const app = express();

//env setting
const dotenv = require("dotenv");
dotenv.config();

//history setting
history = require("connect-history-api-fallback");

//register middlewares
app.use(history());
app.use(express.static(path.join(__dirname, "./dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

//server 8080 port running
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
