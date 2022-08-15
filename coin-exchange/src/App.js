import logo from './plamen.jpeg';
import './App.css';
import Coin from './components/Coin/Coin';


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
      <table className='coin-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={60000.99} />
          <Coin name="Ethereum" ticker="ETH" price={20000.99} />
        </tbody>
      </table>
    </div>
  );
}


export default App;
