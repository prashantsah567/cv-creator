import CreateCV from "./components/Create-cv";
import PreviewCV from "./components/preview-cv";
import "../src/Style.css";

function App() {
  return (
    <div className="container">
      <CreateCV />
      <PreviewCV />
    </div>
  );
}

export default App;
