import React from "react";

import "./CoinCard.css";

function CoinCard({ name, price, image, change }) {
  return (
    <div>
      <h3>
        <img src={image} alt={name} />
        <span>Coin Name: {name}</span> |{" "}
        <span
          style={
            change > 0
              ? { backgroundColor: "green" }
              : { backgroundColor: "red" }
          }
        >
          Price: {price} $ | {change} %
        </span>
      </h3>
    </div>
  );
}

export default CoinCard;
