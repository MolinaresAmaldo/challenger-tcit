const Post = require("../models/post_model.js");

// GET
const getAllPosts = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET by name
const getPostByName = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  const { name } = req.params;
  try {
    const post = await Post.findOne({ where: { name } });
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// POST
const createPost = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newPost = await Post.create({ name, description });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//PATCH
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const post = await Post.findByPk(id);
    if (post) {
      post.name = name;
      post.description = description;
      await post.save();
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id);
    if (post) {
      let deletedPost = post;
      await post.destroy();
      res.status(200).json({
        deletedPost,
        message: "Post deleted successfully",
      });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getAllPosts,
  getPostByName,
  createPost,
  updatePost,
  deletePost,
};
