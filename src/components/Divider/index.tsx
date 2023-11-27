import useIsMobile from "../../hooks/useIsMobile";

const Divider = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && (
        <div
          style={{
            border: "1px black solid",
          }}
        ></div>
      )}
    </>
  );
};

export default Divider;
