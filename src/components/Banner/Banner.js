import React from "react";
import game from "../Game";

function HappyBanner({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Banner({ guesses, answer, gameStatus }) {
  return gameStatus === "won" ? (
    <HappyBanner guesses={guesses} />
  ) : (
    <SadBanner answer={answer} />
  );
}

export default Banner;
