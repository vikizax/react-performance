import { routeTree } from "@/route";
import { ToPathOption } from "@tanstack/react-router";



export interface INavigationData {
  id: number;
  label: string;
  path: ToPathOption<typeof routeTree>;
}

export const sidebarNavigationData: INavigationData[] = [
  { id: 1, label: "Lifting State Down", path: "/lift-state-down" },
  { id: 2, label: "Children As Props", path: "/children-as-props" },
  { id: 3, label: "Settings", path: "/settings" },
  { id: 4, label: "Logout", path: "/logout" },
  { id: 5, label: "Save", path: "/save" },
  { id: 6, label: "Undo", path: "/undo" },
  { id: 7, label: "Redo", path: "/redo" },
  { id: 8, label: "New Document", path: "/new-document" },
  { id: 9, label: "Delete", path: "/delete" },
  { id: 10, label: "Refresh", path: "/refresh" },
  { id: 11, label: "Send Email", path: "/send-email" },
  { id: 12, label: "Print", path: "/print" },
  { id: 13, label: "Help", path: "/help" },
  { id: 14, label: "Search", path: "/search" },
  { id: 15, label: "Share", path: "/share" },
  { id: 16, label: "Download", path: "/download" },
  { id: 17, label: "Upload", path: "/upload" },
  { id: 18, label: "View Details", path: "/view-details" },
  { id: 19, label: "Edit Profile", path: "/edit-profile" },
  { id: 20, label: "Close", path: "/close" },
  { id: 21, label: "View Notifications", path: "/view-notifications" },
  { id: 22, label: "Add to Cart", path: "/add-to-cart" },
  { id: 23, label: "View Orders", path: "/view-orders" },
  { id: 24, label: "Play Video", path: "/play-video" },
  { id: 25, label: "Toggle Dark Mode", path: "/toggle-dark-mode" },
];
