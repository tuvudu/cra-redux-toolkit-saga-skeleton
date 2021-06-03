import { all } from 'redux-saga/effects';

// sagas
import usersSaga from './redux/users/users.saga';

export default function* rootSaga() {
  yield all([usersSaga()]);
}
