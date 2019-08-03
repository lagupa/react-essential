import React from "react";
import Article from "./react_basics/Article";
import CardJohn from "./Cards";
import Greetings from "./Greetings";

function MainSection() {
  return (
    <div className="pt-3">
      <h1 className="container">Main Contend</h1>
      <h3 className="container pt-3">
        <Greetings />
      </h3>
      <hr />
      <div className="container">
        <h2>News Headlines</h2>
        <Article />
        <CardJohn />
      </div>
    </div>
  );
}

export default MainSection;
