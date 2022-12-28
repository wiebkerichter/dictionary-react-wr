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
          Coded by <strong>Wiebke Richter</strong> with ❤️, open-sourced on{" "}
          <a href="https://github.com/wiebkerichter/dictionary-react-wr">
            GitHub
          </a>{" "}
          and hostet on{" "}
          <a href="https://dictionary-react-wr.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
