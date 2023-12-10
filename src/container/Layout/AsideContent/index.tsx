type AsideContentParams = {
  children: React.ReactNode;
};
const AsideContent = ({ children }: AsideContentParams) => {
  return (
    <aside
      className="
        hidden 
        xl:block 
        fixed 
        right-0 
        left-auto 
        inset-0 
        w-[19rem] 
        overflow-y-auto
        top-[calc(3rem+1px)]
        "
    >
      {children}
    </aside>
  );
};

export default AsideContent;
