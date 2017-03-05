import { push } from 'react-router-redux';
import { take, call, put, select } from 'redux-saga/effects';
import { LOAD_POST } from './constants';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  const { dispatch, filename } = yield take(LOAD_POST);

  // TODO this is probably bad using dispatch in here like this
  dispatch(push(`/posts/${filename}`));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
