type TabHeaderButtonParams = {
    children: string;
    id: string;
}

const TabHeaderButton = ({ children, id }: TabHeaderButtonParams) => {
    return <button
        id={id}
        className="border-r border-b border-red-300 last:border-r-0 active:text-sm hover:text-muted" >{children}</button>
}

export default TabHeaderButton;