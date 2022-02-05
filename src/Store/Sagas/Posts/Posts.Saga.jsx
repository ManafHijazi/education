import { call, put, takeEvery } from 'redux-saga/effects';
import { PostsActions } from '../../Actions';
import { PostsStates } from '../../States';
import { GetAllPosts } from '../../../Services';

function* fetchPost(action) {
  try {
    let results = null;
    results = yield call(GetAllPosts, action.payload);
    yield put(PostsActions.getPostSuccess(results));
    if (results) localStorage.setItem('posts', JSON.stringify(results));
  } catch (err) {
    yield put(PostsActions.getPostError(err));
  }
}

export function* watchPost() {
  yield takeEvery(PostsStates.POST, fetchPost);
}

function* fetchReset(action) {
  try {
    yield put(PostsActions.getPostSuccess(action.payload));
  } catch (err) {
    yield put(PostsActions.getPostError(err));
  }
}

export function* watchReset() {
  yield takeEvery(PostsStates.RESET, fetchReset);
}

function* fetchUpdate(action) {
  try {
    yield put(PostsActions.getPostSuccess(action.payload));
  } catch (err) {
    yield put(PostsActions.getPostError(err));
  }
}

export function* watchUpdate() {
  yield takeEvery(PostsStates.UPDATE, fetchUpdate);
}
