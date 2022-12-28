import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <strong>Example:</strong> <em>{definition.example}</em>
            </div>
          );
        })}
        <div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
