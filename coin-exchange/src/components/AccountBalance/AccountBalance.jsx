import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
width: auto;
text-align: center;
background: palevioletred;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`
export default class AccountBalance extends Component {
    render() {
        return (
            <Section>Balance: ${this.props.amount}</Section>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
