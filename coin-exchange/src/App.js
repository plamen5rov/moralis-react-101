import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import CoinList from './components/CoinList';
import AccountBalance from './components/AccountBalance';
import axios from 'axios';

const COIN_COUNT = 10;
const coinsUrl = 'https://api.coinpaprika.com/v1/coins';
const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';


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

    this.setState({ coinData: coinPriceData });
  }
  handleRefresh = async (valueChangekey) => {
    const keyData = await axios.get(tickerUrl + valueChangekey);

    const newCoinData = this.state.coinData.map(function (values) {
      let newValues = { ...values };
      if (values.key === valueChangekey) {
        newValues.price = parseFloat(Number(keyData.data.quotes["USD"].price).toFixed(2));
      };

      return newValues;
    });
    this.setState({ coinData: newCoinData });
  }
  handleToggleBalance = () => {
    this.setState(function (oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      };
    });
  }


  render() {
    return (
      <div className='App'>
        <AppHeader apName={this.state.apName} />
        <AccountBalance amount={this.state.balance}
          handleToggleBalance={this.handleToggleBalance}
          showBalance={this.state.showBalance} />
        <CoinList coinData={this.state.coinData}
          handleRefresh={this.handleRefresh}
          showBalance={this.state.showBalance} />
      </div>
    );
  }
}

export default App;