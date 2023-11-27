import { useRef } from "react";
import { waitFor } from "../../utils/waitFor";

const SlowComponent = ({ waitTime }: { waitTime: number }) => {
  let i = useRef(0);
  waitFor(waitTime);
  return <h2>I am slow to render, rendered {i.current++} times</h2>;
};

export default SlowComponent;
