import Wrapper from "./UI/Wrapper";
import Display from "./UI/Display";
import ButtonBox from "./UI/ButtonBox";
import Button from "./UI/Button";
import React, { useState } from "react";
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
  return (
    <Wrapper>
      <Display value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals " : ""}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked`);
              }}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default Calculator;
