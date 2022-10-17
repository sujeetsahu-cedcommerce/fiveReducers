import { combineReducers, createStore } from "redux";
import {
  add_Reducer,
  clear_Reducer,
  div_Reducer,
  mul_Reducer,
  sub_Reducer,
} from "./Reducers";

const rootReducer = combineReducers({
  add_Reducer: add_Reducer,
  sub_Reducer: sub_Reducer,
  mul_Reducer: mul_Reducer,
  div_Reducer: div_Reducer,
  clear_Reducer: clear_Reducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
