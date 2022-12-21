import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return <p>Hello from Results</p>;
  } else {
    return null;
  }
}
