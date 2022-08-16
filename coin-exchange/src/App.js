import React from 'react';
import logo from './plamen.jpeg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            COIN EXCHANGE APP
          </p>
        </div>
        <div>
          <a
            className="App-link"
            href="https://github.com/plamen5rov"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub Profile
          </a>
        </div>


      </header>
      <AccountBalance amount={10000} />
      <table className='coin-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={23756.93} />
          <Coin name="Ethereum" ticker="ETH" price={1875.99} />
          <Coin name="Tether" ticker="USDT" price={1.00} />
          <Coin name="Cardano" ticker="ADA" price={0.55} />
          <Coin name="BNB" ticker="BNB" price={314.78} />
        </tbody>
      </table>
    </div>
  );
}


export default App;
