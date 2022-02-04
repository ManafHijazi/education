import { PostsStates } from '../../States';

const post = (payload) => {
  return { type: PostsStates.POST, payload };
}

const reset = (payload) => {
  return { type: PostsStates.RESET, payload };
}

const update = (payload) => {
  return { type: PostsStates.UPDATE, payload };
}

const getPostSuccess = (payload) => {
  return { type: PostsStates.POST_SUCCESS, payload };
}

const getPostError = (payload) => {
  return { type: PostsStates.POST_FAIL, payload };
}

export const PostsActions = {
  post,
  getPostSuccess,
  getPostError,
  update,
  reset,
};
