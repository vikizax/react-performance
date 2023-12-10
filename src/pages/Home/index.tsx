import SLDFastPage from "../StateLiftDown/FastPage";
import SLDSlowPage from "../StateLiftDown/SlowPage";
import CAPSlowPage from "../ChildrenAsProps/SlowPage";
import CAPFastPage from "../ChildrenAsProps/FastPage";

const Home = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        React Re-renders and Performance🔥
      </h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <SLDSlowPage />
        <SLDFastPage />

        <CAPSlowPage />
        <CAPFastPage />
      </div>
    </>
  );
};

export default Home;
