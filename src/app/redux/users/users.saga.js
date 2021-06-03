import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchUser } from "./users.api";
import {
  fetchUsersPending,
  fetchUsersFulfilled,
  fetchUsersRejected,
} from "./users.slice";

export function* fetchDataSaga() {
  try {
    let result = yield call(() => fetchUser());
    yield put(fetchUsersFulfilled(result.data));
  } catch (e) {
    yield put(fetchUsersRejected({ message: "test" }));
  }
}

// watcher
function* actionWatcher() {
  yield takeLatest(fetchUsersPending.type, fetchDataSaga);
}

// combine sagas
export default function* usersSaga() {
  yield all([actionWatcher()]);
}
