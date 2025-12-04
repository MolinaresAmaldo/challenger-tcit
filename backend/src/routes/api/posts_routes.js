const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getPostByName,
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/post_controller.js");

router.get("/", getAllPosts);
router.get("/:name", getPostByName);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
