import React, { Component } from 'react';
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            activeItem: "home"
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
    }

    render() {
        const { activeItem } = this.state;
        return (
            <Menu fixed="top" inverted size="huge">
                <Container>
                <Menu.Item 
                    name='home'
                    active={activeItem === 'home'}
                    to="/"
                    as={Link}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    to="/friends"
                    as={Link}
                    onClick={this.handleItemClick}
                />
                </Container>
            </Menu>
        )
    }
}
