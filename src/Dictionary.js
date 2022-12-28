import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <label>What word do you want to look up?</label>
        <form onSubmit={handleSubmit} className=" input-group mb-3">
          <input
            type="search"
            placeholder="Search for something..."
            onChange={updateKeyword}
            className="form-control"
          />
        </form>
        <small className="hint">i.e. paris, wine, yoga, coding</small>
      </section>
      <Results results={results} />
    </div>
  );
}
