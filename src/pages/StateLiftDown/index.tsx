import FastPage from "./FastPage";
import SlowPage from "./SlowPage";
import UITogglers from "@/components/UITogglers";

const StateLiftDown = () => {

  return <>
    <h2 className="p-4">State Lift Down Demonstration</h2>
    <div className="grid grid-cols-2">
      <div className="col-span-1 p-4">
        <UITogglers title="Show Fast!"  >
          <div className="mt-4">
            <FastPage />
          </div>
        </UITogglers>
      </div>

      <div className="col-span-1 p-4">
        <UITogglers title="Show Slow!" >
          <div className="mt-4">
            <SlowPage />
          </div>
        </UITogglers>
      </div>
    </div>
  </>
};


export default StateLiftDown;
