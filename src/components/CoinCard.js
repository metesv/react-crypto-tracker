import React from "react";

import "./CoinCard.css";

function CoinCard({ name, price, image }) {
  return (
    <div>
      <h3>
        <img src={image} alt={name} />
        <span>Coin Name: {name}</span> | <span>Price: {price} $</span>
      </h3>
    </div>
  );
}

export default CoinCard;
