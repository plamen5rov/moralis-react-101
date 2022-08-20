import React, { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import CoinList from './components/CoinList';
import AccountBalance from './components/AccountBalance';
import axios from 'axios';

const COIN_COUNT = 10;
const coinsUrl = 'https://api.coinpaprika.com/v1/coins';
const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';


function App(props) {

  const appName = "React Project";
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);



  const componentDidMount = async () => {
    const response = await axios.get(coinsUrl);

    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    //console.log(coinIds);


    const promises = coinIds.map(id => axios.get(tickerUrl + id));

    const coinData = await Promise.all(promises);

    const coinPriceData = coinData.map(function (response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(Number(coin.quotes.USD.price).toFixed(4)),
      }
    });

    setCoinData(coinPriceData);
  }

  const handleToggleBalance = () => {
    setShowBalance(oldValue => !oldValue);
  }


  const handleRefresh = async (valueChangekey) => {
    const keyData = await axios.get(tickerUrl + valueChangekey);

    const newCoinData = coinData.map(function (values) {
      let newValues = { ...values };
      if (values.key === valueChangekey) {
        newValues.price = parseFloat(Number(keyData.data.quotes["USD"].price).toFixed(2));
      };

      return newValues;
    });
    setCoinData(newCoinData);
  }


  return (
    <div className='App'>
      <AppHeader apName={appName} />
      <AccountBalance amount={balance}
        handleToggleBalance={handleToggleBalance}
        showBalance={showBalance} />
      <CoinList coinData={coinData}
        handleRefresh={handleRefresh}
        showBalance={showBalance} />
    </div>
  );

}

export default App;