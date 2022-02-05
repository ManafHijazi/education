import Axios from 'axios';

export const GetAllPosts = async () => {
  const result = await Axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  )
    .then((data) => data)
    .catch((error) => error.response);
  return result;
};

export const GetPostById = async ({ id }) => {
  const result = await Axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  )
    .then((data) => data)
    .catch((error) => error.response);
  return result;
};

export const GetCommentsByPostId = async ({ id }) => {
  const result = await Axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  )
    .then((data) => data)
    .catch((error) => error.response);
  return result;
};
