import List from "./components/List";
import Layout from "./container/Layout";
import { sidebarNavigationData } from "./data/sidebarNavigationData";
import { Link, Outlet } from "@tanstack/react-router";

function App() {
  return (
    <Layout>
      <Layout.HeaderNavigation></Layout.HeaderNavigation>
      <Layout.SidebarNavigation>
        <List>
          {sidebarNavigationData.map(({ id, label, path }, idx) => (
            <List.Item key={id}>
              <Link
                className="
                  hover:underline 
                  cursor-pointer
                  "
                to={path}
                activeProps={{
                  className: `
                    underline 
                    text-white
                    text-lg
                    font-medium
                    `,
                }}
              >
                {label}
              </Link>
            </List.Item>
          ))}
        </List>
      </Layout.SidebarNavigation>
      <Layout.MainContent>
        <Outlet />
      </Layout.MainContent>
      <Layout.AsideContent>
        <></>
      </Layout.AsideContent>
    </Layout>
  );
}

export default App;
