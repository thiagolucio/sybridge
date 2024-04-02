import "./App.css";
import Header from "./Header";
import { PartsLibrary } from "./PartsLibrary";
import PartsList from "./PartsList";

function App() {
  return (
    <div className="App">
      <Header />
      <PartsList />
      <PartsLibrary />
    </div>
  );
}

export default App;
