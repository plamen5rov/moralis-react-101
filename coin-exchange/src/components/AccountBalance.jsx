import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
width: 28vh;
text-align: center;
background: palevioletred;
color: white;
font-size: 1em;
margin: 1rem;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`
export default function AccountBalance(props) {

    return (
        <Section>Balance: ${props.amount}</Section>
    );

}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
