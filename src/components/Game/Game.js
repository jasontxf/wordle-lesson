import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  // running, won, lost
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleGuess(word) {
    let nextGuesses = [...guesses, word];
    setGuesses(nextGuesses);

    if (word === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function restart() {
    setGuesses([]);
    setGameStatus("running");
    answer = sample(WORDS);
  }

  return (
    <>
      <button onClick={restart}>Restart</button>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
      {gameStatus !== "running" && (
        <Banner guesses={guesses} answer={answer} gameStatus={gameStatus} />
      )}
    </>
  );
}

export default Game;
