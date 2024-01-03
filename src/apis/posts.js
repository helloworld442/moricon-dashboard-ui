import api from "./instance";

const getPosts = async () => {
  const response = await api.get("/codeReview?page=1&size=10");
  return response.data;
};

const getPost = async (postId) => {
  const response = await api.get("/codeReview/" + postId);
  return response.data;
};

const createPost = async (data) => {
  const response = await api.post("/codeReview", data);
  return response.data;
};

export { getPosts, getPost, createPost };
