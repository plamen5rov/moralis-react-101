import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import CoinList from './components/CoinList';
import AccountBalance from './components/AccountBalance';
import axios from 'axios';

const COIN_COUNT = 10;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apName: 'Coin Exchange React Project',
      balance: 10000,
      coinData: [
        /*{
          name: 'BitCoin',
          ticker: 'BTC',
          price: 9999.99,
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 299.0,
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0,
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.2,
        },
        {
          name: 'BitCoin Cash',
          ticker: 'BCH',
          price: 298.99,
        }*/
      ],
    };


  }
  componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');

    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    //console.log(coinIds);

    const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerURL + id));

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

    this.setState({ coinData: coinPriceData });



  }
  render() {
    return (
      <div className='App'>
        <AppHeader apName={this.state.apName} />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </div>
    );
  }
}

export default App;