import React, { Component } from 'react'
import './AccountBalance.css';
import PropTypes from 'prop-types';

export default class AccountBalance extends Component {
    render() {
        return (
            <p className='balance'>Balance: ${this.props.amount}</p>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
