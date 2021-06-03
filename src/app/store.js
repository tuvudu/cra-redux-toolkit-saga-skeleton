import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import usersReducer from "./redux/users/users.slice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);
