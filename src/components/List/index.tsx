import Item from "./Item";

// type ListItemsType = {
//   id: number;
//   label: string;
//   action: () => void;
// };

type ListParams = {
  children: React.ReactNode;
};

const List = ({ children }: ListParams) => {
  return <ul className="pl-12">{children}</ul>;
};

List.Item = Item;
export default List;
