import React from 'react';
import Coin from './Coin';
import styled from 'styled-components';


const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
    `;

export default function CoinList(props) {


    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    {props.showBalance ? <th>Balance</th> : null}
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.coinData.map(({ key, name, ticker, balance, price }) =>
                        <Coin
                            key={key}
                            id={key}
                            name={name}
                            handleRefresh={props.handleRefresh}
                            ticker={ticker}
                            showBalance={props.showBalance}
                            balance={balance}
                            price={price}
                            tickerId={key}
                        />
                    )
                }
            </tbody>
        </Table>
    )

} 