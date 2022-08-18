import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import CoinList from './components/CoinList';
import AccountBalance from './components/AccountBalance';
import axios from 'axios';

const COIN_COUNT = 100;

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
  componentDidMount = () => {
    axios.get('https://api.coinpaprika.com/v1/coins')
      .then(response => {
        let coinData = response.data.slice(0, COIN_COUNT).map(function (coin) {
          return {
            key: coin.id,
            name: coin.name,
            ticker: coin.symbol,
            balance: 0,
            price: 0
          }
        });
        this.setState({ coinData });
      });

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