import "./index.scss";
import React from "react";

export default function AnimateText({ letterClass, text, idx }) {
  const letters = text.split("");

  return (
    <div>
      {letters.map((letter, charIndex) => (
        <span key={charIndex} className={`${letterClass} _${charIndex + idx}`}>
          {letter}
        </span>
      ))}
    </div>
  );
}
