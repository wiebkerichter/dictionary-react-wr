import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateKeyword} />
      <input type="submit" value="Search" />
    </form>
  );
}
