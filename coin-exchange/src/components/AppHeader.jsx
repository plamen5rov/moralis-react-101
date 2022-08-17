import React, { Component } from 'react'
import logo from '../plamen.jpeg'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 4rem;
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 36px;
    color: white;
`;

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apName: this.props.apName
        }
    }
    render() {
        return (
            <Header>
                <img src={logo} alt='React logo' className='App-logo' />
                <H1>{this.state.apName}</H1>
            </Header>
        )
    }
}

AppHeader.propTypes = {
    apName: PropTypes.string.isRequired,
}