import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center">
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <footer className="footer">
          Coded by <strong>Wiebke Richter</strong> with ❤️
        </footer>
      </div>
    </div>
  );
}

export default App;
