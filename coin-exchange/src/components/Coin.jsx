import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableData = styled.td`
border: 1px solid rgb(31, 8, 179);
width: 25vh;
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
                <TableData>${this.state.price}</TableData>
                <TableData><button onClick={this.handleClick}>Refresh</button></TableData>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired

}
