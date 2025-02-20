const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB, checkConnection } = require("./db");

const app = express();
dotenv.config();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("Server up and running");
});

connectDB();
checkConnection();

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
