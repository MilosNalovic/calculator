import "./Calculator.css";
import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const clickHander = (value) => {
    if (displayValue === "0") {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
    console.log(displayValue);
  };
  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="keypad">
        <button className="operator">C</button>
        <button className="operator">CE</button>
        <button className="operator">{"\u2190"}</button>
        <button className="operator">/</button>
        <button className="number" onClick={() => clickHander("7")}>
          7
        </button>
        <button className="number" onClick={() => clickHander("8")}>
          8
        </button>
        <button className="number" onClick={() => clickHander("9")}>
          9
        </button>
        <button className="operator">*</button>
        <button className="number" onClick={() => clickHander("4")}>
          4
        </button>
        <button className="number" onClick={() => clickHander("5")}>
          5
        </button>
        <button className="number" onClick={() => clickHander("6")}>
          6
        </button>
        <button className="operator">-</button>
        <button className="number" onClick={() => clickHander("1")}>
          1
        </button>
        <button className="number" onClick={() => clickHander("2")}>
          2
        </button>
        <button className="number" onClick={() => clickHander("3")}>
          3
        </button>
        <button className="operator">+</button>
        <button className="operator">.</button>
        <button className="number" onClick={() => clickHander("0")}>
          0
        </button>
        <button className="operator"></button>
        <button className="operator">=</button>
      </div>
    </div>
  );
};

export default Calculator;
