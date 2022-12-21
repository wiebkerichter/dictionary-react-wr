import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  // documentation: https://dictionaryapi.dev/
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(url).then(handleResponse);

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateKeyword} className="form-control" />
      <input type="submit" value="Search" className="btn btn-primary" />
    </form>
  );
}
