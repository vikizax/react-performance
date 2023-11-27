import FastPage from "./pages/FastPage";
import SlowPage from "./pages/SlowPage";
import Divider from "./components/Divider";

function App() {
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
        <SlowPage />
        <Divider />
        <FastPage />
      </div>
    </>
  );
}

export default App;
