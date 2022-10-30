import React from "react";
import { movies } from "../data";

function Movies() {
  const movie = movies.map((m) => {
    return (
      <div key={m.title}>
        <h2>Name: {m.title}</h2>
        <p>Time: {m.time}</p>
        <ul>
          {m.genres.map((g) => {
            return <li key={g}>{g}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {movie}
    </div>
  );
}

export default Movies;
