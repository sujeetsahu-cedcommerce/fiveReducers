import React, { useState } from "react";
import { connect } from "react-redux";
import "./Style.css";
import {
  addition,
  clear,
  division,
  division_clear,
  multiplication,
  subtraction,
} from "./Actions";
import { add_Reducer } from "./Reducers";

const Container = (props) => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [res, setRes] = useState("");
  const [flag, setFlag] = useState("");
  const Add = () => {
    props.addition1(num1, num2);
    setFlag("add");
    // setRes(add_Reducer);
  };

  const Subtract = () => {
    props.subtraction1(num1, num2);
    setFlag("sub");
  };

  const Multiply = () => {
    props.multiplication1(num1, num2);
    setFlag("mul");
  };

  const Division = () => {
    props.division1(num1, num2);
    setFlag("div");
  };

  const Clear = () => {
    props.clear1();
    setNum1("");
    setNum2("");
    setFlag("clear");
  };
  // props.division1_clear();
  console.log(res);
  console.log(props.add_Reducer.result);
  return (
    <div>
      <div>
        <div style={{ margin: "10px" }}>
          <input
            type="number"
            placeholder="enter first number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
            className="inputBox"
          />
        </div>
        <div style={{ margin: "10px" }}>
          <input
            type="number"
            placeholder="enter second number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
            className="inputBox"
          />
        </div>
      </div>
      <div>
        <button onClick={Add} className="buttons">
          Add
        </button>
        <button onClick={Subtract} className="buttons">
          Subtract
        </button>
        <button onClick={Multiply} className="buttons">
          Multiply
        </button>
        <button onClick={Division} className="buttons">
          Division
        </button>
        <button onClick={Clear} className="buttons">
          Clear
        </button>
      </div>
      {flag === "add" ? (
        <div style={{ marginTop: "30px" }}>
          Result is {props.add_Reducer.result}
        </div>
      ) : flag === "sub" ? (
        <div style={{ marginTop: "30px" }}>
          Result is {props.sub_Reducer.result}
        </div>
      ) : flag === "mul" ? (
        <div style={{ marginTop: "30px" }}>
          Result is {props.mul_Reducer.result}
        </div>
      ) : flag === "div" ? (
        <div style={{ marginTop: "30px" }}>
          Result is {props.div_Reducer.result}
        </div>
      ) : flag === "clear" ? (
        <div style={{ marginTop: "30px" }}>{props.clear_Reducer.result}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addition1: (num1, num2) => dispatch(addition(num1, num2)),
    subtraction1: (num1, num2) => dispatch(subtraction(num1, num2)),
    multiplication1: (num1, num2) => dispatch(multiplication(num1, num2)),
    division1: (num1, num2) => dispatch(division(num1, num2)),
    // division1_clear: () => dispatch(division_clear()),
    clear1: () => dispatch(clear()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
