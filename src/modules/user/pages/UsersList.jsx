import React, { Component, Fragment } from 'react';
import { Card } from "semantic-ui-react";

import UserCard from "../components/UserCard";

export default class UsersList extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        const { getAllUsers } = this.props;
        getAllUsers();
    }

    handleUserDetail = id => {
        const {
            match: { url },
            history: { push },
            pickUser
        } = this.props;
        const detailURL = `${url}/${id}`
        pickUser(id, () => push(detailURL));
    }

    render() {
        const { users } = this.props;
        return (
            <Fragment>
                <Card.Group>
                    {users.map(user => (
                        <UserCard 
                            {...user} 
                            handleDetail={this.handleUserDetail}
                        />)
                    )}
                </Card.Group>
            </Fragment>
        )
    }
}
