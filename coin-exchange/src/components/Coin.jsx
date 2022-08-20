import React from 'react';
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


export default function Coin(props) {


    const handleClick = (event) => {
        event.preventDefault();
        props.handleRefresh(props.tickerId);
    }


    return (
        <tr>
            <TableData>{props.name}</TableData>
            <TableData>{props.ticker}</TableData>
            {props.showBalance ? <TableData>{props.balance}</TableData> : null}
            <TableData>${props.price}</TableData>
            <TableData>
                <form action="">
                    <Button onClick={handleClick}>Refresh</Button>
                </form>
            </TableData>
        </tr>
    )

}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired

}
