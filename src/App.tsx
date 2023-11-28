import SLDFastPage from "./pages/StateLiftDown/FastPage";
import SLDSlowPage from "./pages/StateLiftDown/SlowPage";
import CAPSlowPage from './pages/ChildrenAsProps/SlowPage';
import CAPFastPage from './pages/ChildrenAsProps/FastPage'

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
        <SLDSlowPage />
        <Divider />
        <SLDFastPage />

        <CAPSlowPage />
        <CAPFastPage />
      </div>
    </>
  );
}

export default App;
