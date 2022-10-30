import React from "react";
import { directors } from "../data";

function Directors() {
  const director = directors.map((d) => {
    return (
      <div key={d.name}>
        <h2>Name: {d.name}</h2>
        <h3>Movies:</h3>
        <ul>
          {d.movies.map((m) => {
            return <li key={m}>{m}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors;
