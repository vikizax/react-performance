import ActionButton from "@/components/ActionButton";
import { useState } from "react";
import SlowComponent from "../../../components/SlowComponent";

const SlowPage = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="flex flex-col gap-4"
      id='sld-slow'
    >
      <h4 className="font-bold">I AM SLOW!</h4>
      <SlowComponent waitTime={180} />
      <ActionButton action={() => setShow((prev) => !prev)} label="Toggle World" />
      {show && <h2>HELLO WORLD</h2>}
    </div>
  );
};

export default SlowPage;
