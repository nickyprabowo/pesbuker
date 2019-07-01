import React, { Component } from 'react';
import { Grid, Card } from "semantic-ui-react";

import UserCard from "../components/UserCard";
import Loading from "../../../shared-components/Loading";

export default class UsersList extends Component {
    constructor(props){
        super();
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
        const { users, userAsyncState } = this.props;
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        {userAsyncState === "loading" &&
                            <Loading />
                        }
                        {users.length > 0 &&
                            <Card.Group itemsPerRow={3}>
                                {users.map(user => (
                                    <UserCard
                                        key={user.userId}
                                        {...user} 
                                        handleDetail={this.handleUserDetail}
                                    />)
                                )}
                            </Card.Group>
                        }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
