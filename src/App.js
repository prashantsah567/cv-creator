import CreateCV from "./components/Create-cv/Create-cv";
import PreviewCV from "./components/Preview-cv/Preview-cv";
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
