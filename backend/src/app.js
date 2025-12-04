const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const apiRouter = require("./routes/index.js");
const seedPosts = require("./seeders/post_seeder.js");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // donde corre tu frontend
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/api", apiRouter);
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.send(200);
});

const PORT = process.env.SERVER_PORT || 3000;
seedPosts();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
