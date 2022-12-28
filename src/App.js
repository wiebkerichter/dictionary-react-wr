import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center">
          <h2>Dictionary</h2>
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="footer">
          Coded by <strong>Wiebke Richter</strong> with ❤️
        </footer>
      </div>
    </div>
  );
}

export default App;
