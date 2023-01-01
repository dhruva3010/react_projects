import { createStore } from "redux";

// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
