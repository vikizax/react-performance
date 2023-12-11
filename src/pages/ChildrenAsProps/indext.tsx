import PageTitle from "@/components/PageTitle";
import UITogglers from "@/components/UITogglers";
import { javascript } from '@codemirror/lang-javascript';
import { sublime } from '@uiw/codemirror-theme-sublime'
import CodeMirror from '@uiw/react-codemirror';
import FastPage from "./FastPage";
import SlowPage from "./SlowPage";
import Tabs from '@/components/Tabs'


const ChildrenAsProps = () => {
  return <>
    <PageTitle>Children As Props Demonstration</PageTitle>
    <div className="grid grid-cols-2">
      <div className="col-span-1 p-4">
        <UITogglers title="Show Fast!">
          <div className="mt-4">
            <FastPage />
          </div>
        </UITogglers>

        <div className="mt-4">

          <Tabs>
            <Tabs.TabHeaderButtonGroup>
              <Tabs.TabHeaderButton id={'1'}>
                1
              </Tabs.TabHeaderButton>
              <Tabs.TabHeaderButton id={'2'}>
                2
              </Tabs.TabHeaderButton>
              <Tabs.TabHeaderButton id={'3'}>
                3
              </Tabs.TabHeaderButton>
              <Tabs.TabHeaderButton id={'4'}>
                4
              </Tabs.TabHeaderButton>
            </Tabs.TabHeaderButtonGroup>
          </Tabs>
        </div>

        <CodeMirror
          className="mt-8"
          theme={sublime}
          value={`console.log('HELLO');\nconsole.log('WORLD');`}
          height="200px"
          extensions={[javascript({ jsx: true })]}
          editable={false} />

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

export default ChildrenAsProps;
