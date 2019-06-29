import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import UserList from "./pages/UsersList";
import UserDetail from "./pages/UserDetail";

import * as UserActions from "./actions";
import * as PostActions from "../post/actions";

function mapStateToProps(state){
    const { user, post } = state;

    return {
        ...user,
        ...post
    }
}

class Container extends Component {
    render() {
        const { match: { url } } = this.props
        return (
            <Fragment>
                <Route exact path={url} render={() => <UserList {...this.props}/>} />
                <Route path={`${url}/:id`} render={() => <UserDetail {...this.props}/>} />
            </Fragment>
        )
    }
}

export default connect(
    mapStateToProps,
    { ...UserActions, ...PostActions }
)(Container);