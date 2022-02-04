import { all } from '@redux-saga/core/effects';
import { watchPost, watchReset, watchUpdate } from './Posts/Posts.Saga';

export default function* rootSaga() {
  yield all([watchPost(), watchReset(), watchUpdate()]);
}
