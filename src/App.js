import React, { useState, useEffect } from "react";
import axios from "axios";

import CoinCard from "./components/CoinCard";

import "./App.css";

function App() {
  const [coinArray, setCoinArray] = useState([]);
  const [filteredCoinArray, setFilteredCoinArray] = useState([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(getCoins, []);

  useEffect(() => {
    if (inputVal) {
      const newArr = coinArray.filter(coin =>
        coin.name.toLowerCase().includes(inputVal)
      );
      setFilteredCoinArray(newArr);
    } else {
      setFilteredCoinArray(coinArray);
    }
  }, [inputVal]);

  function getCoins() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false%22"
      )
      .then(res => {
        setCoinArray(res.data);
        setFilteredCoinArray(res.data);
      });
  }

  return (
    <div className="App">
      <h1>Crypto Tracker</h1>
      <input
        type="text"
        placeholder="Search Coin"
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
      />
      {filteredCoinArray.map(
        ({ id, name, current_price, image, price_change_percentage_24h }) => (
          <CoinCard
            key={id}
            name={name}
            price={current_price}
            image={image}
            change={price_change_percentage_24h}
          />
        )
      )}
    </div>
  );
}

export default App;
