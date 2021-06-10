import React, { useState, useEffect } from "react";
import axios from "axios";

import CoinCard from "./components/CoinCard";

import "./App.css";

function App() {
  const [coinArray, setCoinArray] = useState([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false%22"
      )
      .then(res => {
        setCoinArray(res.data);
      });
  }, []);

  console.log(coinArray);

  function handleInput(e) {
    setInputVal(e.target.value);
  }

  return (
    <div className="App">
      <h1>Crypto Tracker</h1>
      <input
        type="text"
        placeholder="Search Coin"
        value={inputVal}
        onChange={handleInput}
      />
      {coinArray.length > 0 &&
        coinArray.map(({ id, name, current_price, image }) => (
          <CoinCard key={id} name={name} price={current_price} image={image} />
        ))}
    </div>
  );
}

export default App;
