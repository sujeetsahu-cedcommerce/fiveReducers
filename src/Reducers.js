import { ADD, CLEAR, DIV, DIV_CLR, MUL, SUB } from "./Types";

const initialState = {
  result: "",
};

export const add_Reducer = (state = initialState, action) => {
  console.log("reducers", typeof action.payload1, typeof action.payload1);
  console.log(typeof state);
  switch (action.type) {
    case ADD:
      return {
        result: action.payload1 + action.payload2,
      };
    default:
      return state;
  }
};

export const sub_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUB:
      return {
        result: action.payload1 - action.payload2,
      };
    default:
      return state;
  }
};

export const mul_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MUL:
      return {
        result: action.payload1 * action.payload2,
      };
    default:
      return state;
  }
};

export const div_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case DIV:
      return {
        result: action.payload1 / action.payload2,
      };
    // case DIV_CLR:
    //   return {
    //     result: 0,
    //   };
    default:
      return state;
  }
};

export const clear_Reducer = (state = initialState, action) => {
  console.log("clear");
  console.log(initialState);
  console.log("initialState", initialState);
  switch (action.type) {
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
