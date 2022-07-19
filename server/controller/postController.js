import PostModel from "../model/postModel.js";

export const getPost = async (req, res) => {
  try {
    const post = await PostModel.find();
    res.status(200).json(post);
    console.log(post);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createPost = async (req, res) => {
  const PostBody = req.body;
  const newPost = new PostModel(body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json(error);
  }
};
