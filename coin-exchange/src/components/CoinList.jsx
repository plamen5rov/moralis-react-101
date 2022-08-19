import React, { Component } from 'react'
import Coin from './Coin';

export default class CoinList extends Component {
    render() {
        return (
            <table className='coin-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ticker</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.coinData.map(({ key, name, ticker, price, balance }) =>
                            <Coin key={key}
                                handleClick={this.props.handleClick}
                                name={name}
                                ticker={ticker}
                                price={price}
                                balance={balance} />
                        )
                    }
                </tbody>
            </table>
        )
    }
}