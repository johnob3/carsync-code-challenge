import { createStore } from "redux";

import reducer from "./reducer";

function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    let state = JSON.parse(serializedState)
    state.error = null;
    return state;
  } catch (err) {
    return undefined;
  }
};


function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e)
  }
}

export default function configureStore() {
  const store = createStore(reducer, loadState());
  store.subscribe(() => saveToLocalStorage(store.getState()))
  return store;
}