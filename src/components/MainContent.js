import React from "react";
import Article from "./react_basics/Article";
import CardJohn from "./Cards";
import Greetings from "./Greetings";
import "../style.css";

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
        <h1>Product Information</h1>
        <hr />
        <div className="card-container">
          <CardJohn
            title="Canibal Stove"
            imgLink="https://picsum.photos/300/200"
            description="Main paget of rould passendge of the hdigheuha dhogjdh jdhg par"
            location="Store East Minneapolish"
            price="34"
            cardlink="#"
            cardlink2="#"
          />
          <CardJohn
            title="South Sudanese Cat"
            imgLink="http://placekitten.com/300/200"
            description="Here you can use rows and columns to organize your footer
            content"
            location="LA East Bond"
            price="14"
            cardlink="#"
            cardlink2="#"
          />
          <CardJohn
            title="Brazilian Toto"
            imgLink="http://placekitten.com/300/199"
            description="Main paget of rould passendge of the hdigheuha dhogjdh jdhg par"
            location="Crast justo odio"
            price="24"
            cardlink="#"
            cardlink2="#"
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
