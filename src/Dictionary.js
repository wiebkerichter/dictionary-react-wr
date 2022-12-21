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
  }

  // documentation: https://dictionaryapi.dev/
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(url).then(handleResponse);

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={updateKeyword}
          className="form-control"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <Results results={results} />
    </div>
  );
}
