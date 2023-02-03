import "./Display.css";
import { Textfit } from "react-textfit";
const Display = (props) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {props.value}
    </Textfit>
  );
};
export default Display;
