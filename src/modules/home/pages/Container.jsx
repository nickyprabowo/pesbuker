import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import Home from "./Home";

import * as PostActions from "../../post/actions";
import * as UserActions from "../../user/actions";
import * as PhotoActions from "../../photo/actions";

function mapStateToProps(state){
    const { post, user, photo } = state;

    return {
        ...post,
        ...user,
        ...photo
    }
}

class Container extends Component {
    render() {
        const { match: { url } } = this.props;
        return (
            <Fragment>
                <Route exact path={`${url}`} render={() => <Home {...this.props}/>} />
            </Fragment>
        )
    }
}

export default connect(
    mapStateToProps,
    { 
        ...PostActions,
        ...UserActions,
        ...PhotoActions
    }
)(Container);