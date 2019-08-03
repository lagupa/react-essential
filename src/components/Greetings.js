import React from "react";

function Greetings() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let greetings;
  if (hours < 12) {
    greetings = "Goodmorning Stephen!";
  } else if (hours >= 12 && hours < 17) {
    greetings = <h2>Good Afternoon Stephen!</h2>;
  } else {
    greetings = "Goodnight Stephen!";
  }
  return (
    <span>
      {greetings} The time is {hours}:{minutes}:{seconds} hours
    </span>
  );
}

export default Greetings;
