import api from "./axios";

export const fetch_posts = async () => {
  const { data } = await api.get("/posts");
  return data;
};

export const create_post = async (post) => {
  const { data } = await api.post("/posts", post);
  return data;
};

export const delete_post = async (post_id) => {
  const { data } = await api.delete(`/posts/${post_id}`);
  return data;
};
