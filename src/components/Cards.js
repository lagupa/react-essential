import React from "react";

function CardJohn(props) {
  return (
    <div className="mt-3 mb-2">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={props.imgLink}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.location}</li>
          <li className="list-group-item">${props.price}</li>
        </ul>
        <div className="card-body">
          <a href={props.cardlink} className="card-link">
            eBay
          </a>
          <a href={props.cardlink2} className="card-link">
            Amazon
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardJohn;
