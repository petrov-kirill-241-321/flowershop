import { legacy_createStore as createStore, combineReducers } from "redux";
import { commentReducer } from "./redux-comment";

let reducers = combineReducers({
  commentsPage: commentReducer,
});

export const store = createStore(reducers);
export type RootState = ReturnType<typeof reducers>;
