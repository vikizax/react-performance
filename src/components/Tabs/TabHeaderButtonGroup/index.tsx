import { cloneElement } from 'react';

type TabHeaderButtonGroupParams = {
    children: React.ReactElement<HTMLButtonElement>[];
}
const TabHeaderButtonGroup = ({ children }: TabHeaderButtonGroupParams) => {

    const clonedChildrens = children.map(ch => cloneElement(ch, {
        className: 'text-lg'
    }))

    return <div className="grid grid-flow-col-dense">{clonedChildrens}</div>
}

export default TabHeaderButtonGroup;