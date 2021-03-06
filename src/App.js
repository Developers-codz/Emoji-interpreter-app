import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "ð": "Grinning Face",
  "ð": "Smiling Face With Heart-Eyes",
  "ð": "Smiling Face",
  "ð": "Winking Face With Tongue",
  "ð": "Neutral Face",
  "ð": "Unamused face",
  "ð": "Smiling Face with Horns",
  "ð": "Face with Tears of Joy",
  "ðĪĐ": "Star-Stuck",
  "ð": "Face blowing a kiss",
  "ð": "Face with  tongue",
  "ðĪŠ": "Zany Face"
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
