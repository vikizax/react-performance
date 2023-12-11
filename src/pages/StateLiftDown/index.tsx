import FastPage from "./FastPage";
import SlowPage from "./SlowPage";
import UITogglers from "@/components/UITogglers";
import PageTitle from "@/components/PageTitle";

const StateLiftDown = () => {

  return <>
    <PageTitle>State Lift Down Demonstration</PageTitle>
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
