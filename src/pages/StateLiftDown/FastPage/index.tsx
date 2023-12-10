import UITogglers from "@/components/UITogglers";
import SlowComponent from "../../../components/SlowComponent";

const FastPage = () => {
  return (
    <div
      className="flex flex-col gap-4"
    >
      <h4 className="font-bold">I AM FAST!</h4>
      <SlowComponent waitTime={180} />
      <UITogglers title="Toggle World">
        <h2>HELLO WORLD</h2>
      </UITogglers>
    </div>
  );
};

export default FastPage;
