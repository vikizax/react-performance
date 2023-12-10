type SidebarNavigationParams = {
  children: React.ReactNode;
};
const SidebarNavigation = ({ children }: SidebarNavigationParams) => {
  return (
    <nav
      className="
        hidden
        lg:block
        fixed 
        inset-0 
        right-auto 
        w-[19rem]  
        overflow-y-auto
        top-[calc(3rem+1px)]
        px-2
        "
    >
      {children}
    </nav>
  );
};

export default SidebarNavigation;
