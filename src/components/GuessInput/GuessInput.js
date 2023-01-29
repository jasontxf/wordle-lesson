import React from "react";

function GuessInput({ handleGuess, gameStatus }) {
  const [input, setInput] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (input.length !== 5) {
      window.alert("Please insert exactly 5 characters ");
      return;
    }

    handleGuess(input);

    setInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>

      <input
        id="guess-input"
        disabled={gameStatus !== "running"}
        required
        minLength={5}
        maxLength={5}
        type="text"
        value={input}
        onChange={(e) => {
          if (e.target.value.length <= 5) {
            setInput(e.target.value.toUpperCase());
          }
        }}
      />
    </form>
  );
}

export default GuessInput;
