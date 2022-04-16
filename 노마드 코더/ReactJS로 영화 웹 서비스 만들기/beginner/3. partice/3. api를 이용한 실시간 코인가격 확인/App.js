import { useState, useEffect } from "react";

// 코인 api 가져오기
// 1. fetch함수로 api주소를 붙여넣는다.
// 2. fetch('url).then()함수를 붙여 다음 코드를 실행한다.
// 3. .then((response)=>response.json())으로 고쳐 json으로 받는다.
// 4. .then((json)=>console.log(json))을 붙여 json이 제대로 받아졌는지 확인한
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [change, setChange] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setCoins(json);
      });
  }, []);

  const onChange = (event) => {
    setMoney(event.target.value);
  };
  const onClick = () => {
    coins.map((coin) => {
      if (coin.symbol === "BTC") {
        setChange(money / coin.quotes.USD.price);
      }
    });
  };

  return (
    <div>
      <h1>This coin! {loading ? "" : `(${coins.length})`}</h1>
      <input type="text" value={money} onChange={onChange} />
      <h2>{change}</h2>
      <button onClick={onClick}>Change</button>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
