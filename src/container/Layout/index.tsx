import AsideContent from "./AsideContent";
import HeaderNavigation from "./HeaderNavigation";
import MainContent from "./MainContent";
import SidebarNavigation from "./SidebarNavigation";

type LayoutParams = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutParams) => {
  return (
    <div
      className="
        h-[100%] 
        bg-[hsl(240,10%,3.9%)] 
        text-muted-foreground
        "
    >
      {children}
    </div>
  );
};

Layout.SidebarNavigation = SidebarNavigation;
Layout.MainContent = MainContent;
Layout.AsideContent = AsideContent;
Layout.HeaderNavigation = HeaderNavigation;
export default Layout;
