import "./index.scss";
import React from "react";

export default function AnimateText({ letterClass, text, idx }) {
  // Split the text into individual characters
  const characters = text.split("");

  return (
    <>
      {characters.map((char, charIndex) => {
        // Check if the character is empty (space)
        const isSpace = char === " ";

        // If it's not a space or it's the last character (allow trailing space), create a <span>
        if (!isSpace || charIndex === characters.length - 1) {
          return (
            <span
              key={charIndex}
              className={` ${letterClass} _${charIndex + idx}`}
            >
              {char}
            </span>
          );
        } else {
          // If it's a space and not the last character, render a non-breaking space
          return "\u00A0"; // Unicode non-breaking space character
        }
      })}
    </>
  );
}
