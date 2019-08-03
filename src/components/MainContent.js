import React from "react";
import Article from "./react_basics/Article";
import CardJohn from "./Cards";



function MainSection() {
    return (
        <div>
            <h1 className="container">Main Contend</h1> <hr />
            <div className="container">
                <h2>News Headlines</h2>
                <Article />
                <CardJohn />

            </div>
        </div>
    )
}

export default MainSection;