import { PostsStates } from '../../States';

const init = {
  postsResponse: localStorage.getItem('posts')
    ? JSON.parse(localStorage.getItem('posts'))
    : null,
  error: null,
};

export const PostsReducers = (state = init, action) => {
  switch (action.type) {
    case PostsStates.RESET:
      return { ...state, postsResponse: null, error: null };
    case PostsStates.POST_SUCCESS:
    case PostsStates.POST_FAIL:
      return { ...state, postsResponse: action.payload, error: null };
    default:
      return state;
  }
};
