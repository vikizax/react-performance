import { useState } from "react";
import SlowComponent from "../../components/SlowComponent";

const SlowPage = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>I AM SLOW!</h1>

      <SlowComponent waitTime={600} />
      <button
        style={{
          width: "fit-content",
        }}
        onClick={() => setShow((prev) => !prev)}
      >
        Toggle World
      </button>
      {show && <h2>HELLO WORLD</h2>}
    </div>
  );
};

export default SlowPage;
