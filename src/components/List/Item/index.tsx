type ItemParams = {
  children: React.ReactNode;
  liProps?: React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >;
};
const Item = ({ children, liProps }: ItemParams) => {
  return (
    <li {...liProps} className="py-[.3rem]">
      {children}
    </li>
  );
};

export default Item;
