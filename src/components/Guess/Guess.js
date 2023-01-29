import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;

  return <span className={className}>{letter}</span>;
}

function Guess({ word, answer }) {
  const results = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((key) => (
        <Cell
          key={key}
          letter={results ? results[key].letter : undefined}
          status={results ? results[key].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
