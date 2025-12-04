const express = require("express");
const router = express.Router();

const PostRoute = require("./api/posts_routes.js");

router.use("/posts", PostRoute);

module.exports = router;