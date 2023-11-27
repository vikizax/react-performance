import SlowComponent from "../../../components/SlowComponent";
import HelloWorldToggle from "./HelloWorldToggle";
const FastPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>I AM FAST!</h1>
      <SlowComponent waitTime={600} />
      <HelloWorldToggle />
    </div>
  );
};

export default FastPage;
