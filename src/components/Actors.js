import React from "react";
import { actors } from "../data";

function Actors() {
  const actor = actors.map((a) => {
    return (
      <div key={a.name}>
        <h2>{a.name}</h2>
        <h3>Movies: </h3>
        <ul>
          {a.movies.map((m) => {
            return <li key={m}>{m}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
  );
}

export default Actors;
