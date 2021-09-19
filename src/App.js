import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😀": "Grinning Face",
  "😍": "Smiling Face With Heart-Eyes",
  "😊": "Smiling Face",
  "😜": "Winking Face With Tongue",
  "😐": "Neutral Face",
  "😒": "Unamused face",
  "😈": "Smiling Face with Horns",
  "😂": "Face with Tears of Joy",
  "🤩": "Star-Stuck",
  "😘": "Face blowing a kiss",
  "😛": "Face with  tongue",
  "🤪": "Zany Face"
};
// console.log(Object.keys(emojiDictionary));
var emojiWeKnow = Object.keys(emojiDictionary);
var color = "blue";
export default function App() {
  const [meaning, setMeaning] = useState(" ");
  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database ";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        Emoji <span style={{ color: color }}>Interpreter</span>
      </h1>
      <input onChange={emojiInputHandler} />
      <div style={{ height: 10, paddingTop: "1rem" }}>{meaning}</div>
      <h3>Emoji We know</h3>
      <div className="divEmoStyling">
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.8rem" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
