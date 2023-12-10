type MainContentParams = {
  children: React.ReactNode;
};
const MainContent = ({ children }: MainContentParams) => {
  return (
    <main
      className="
        lg:pl-[19rem] 
        h-[calc(100%-3rem-1px)] 
        xl:pr-[19rem]
        overflow-auto
        top-[3rem]
        lg:mr-2
        "
    >
      <section className="p-5">{children}</section>
    </main>
  );
};

export default MainContent;
