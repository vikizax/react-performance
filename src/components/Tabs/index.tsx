import TabHeaderButton from "./TabHeaderButton";
import TabHeaderButtonGroup from "./TabHeaderButtonGroup";

type TabsParams = {
    children: React.ReactNode;
}
const Tabs = ({ children }: TabsParams) => {
    return <div>{children}</div>
}

Tabs.TabHeaderButtonGroup = TabHeaderButtonGroup;
Tabs.TabHeaderButton = TabHeaderButton;

export default Tabs;

