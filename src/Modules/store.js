import { createStore } from "redux";

import reducer from "./reducer";
import { loadState, saveToLocalStorage } from './localStorage';


export default function configureStore() {
  const store = createStore(reducer, loadState());
  store.subscribe(() => saveToLocalStorage(store.getState()))
  return store;
}