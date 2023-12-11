type PageTitleParams = {
    children: string;
}

const PageTitle = ({ children }: PageTitleParams) => {
    return <h2 className="p-4 text-muted font-bold text-lg">{children}</h2>
}

export default PageTitle;