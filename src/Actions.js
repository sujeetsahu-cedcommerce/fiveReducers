import { ADD, CLEAR, DIV, DIV_CLR, MUL, SUB } from "./Types";

export const addition = (data1, data2) => {
  console.log("addition", data1, data2);
  return {
    type: ADD,
    payload1: data1,
    payload2: data2,
  };
};

export const subtraction = (data1, data2) => {
  return {
    type: SUB,
    payload1: data1,
    payload2: data2,
  };
};

export const multiplication = (data1, data2) => {
  return {
    type: MUL,
    payload1: data1,
    payload2: data2,
  };
};

export const division = (data1, data2) => {
  return {
    type: DIV,
    payload1: data1,
    payload2: data2,
  };
};

export const clear = () => {
  return {
    type: CLEAR,
  };
};

// export const division_clear = () => {
//   return {
//     type: DIV_CLR,
//     payload1: 0,
//     payload2: 0,
//   };
// };