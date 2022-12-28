import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <strong>Similar:</strong>
              <br />
              <p>{definition.definition}</p>
              <p>
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
