import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableData = styled.td`
border: 1px solid rgb(31, 8, 179);
width: 28vh;
font-size: 1.2rem
`;

const Button = styled.button`
    height: 2rem;
    width: 100%;
    background-color: #282c34;
    color: #61dafb;
    border: none;
    font-size: 1rem;
    :active {
        background: #0053ba;
    }
    :hover {
        border: 1px solid #cccccc;
        border-radius: 3px;
        cursor: pointer;
    }
`;


export default class Coin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }

    /* componentDidMount() {
        const callback = () => {
            // seting state to a random value
            const randomPercentage = 0.995 + Math.random() * 0.1;

            this.setState(function (oldState) {
                return {
                    price: oldState.price * randomPercentage
                };
            });
        }
        setInterval(callback, 1000);
    }
    */
    handleClick(event) {
        event.preventDefault();

        const callback = () => {
            // seting state to a random value
            const randomPercentage = 0.995 + Math.random() * 0.1;

            this.setState(function (oldState) {
                return {
                    price: oldState.price * randomPercentage
                };
            });
        }
        setInterval(callback, 1000);
    }

    render() {
        return (
            <tr>
                <TableData>{this.props.name}</TableData>
                <TableData>{this.props.ticker}</TableData>
                {this.props.showBalance ? <TableData>{this.props.balance}</TableData> : null}
                <TableData>${this.props.price}</TableData>
                <TableData>
                    <form action="">
                        <Button onClick={this.handleClick}>Refresh</Button>
                    </form>
                </TableData>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired

}
