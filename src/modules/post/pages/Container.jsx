import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import PostDetail from "./PostDetail";

import * as PostActions from "../actions";

function mapStateToProps(state){
    const { post } = state;

    return {
        ...post,
    }
}

class Container extends Component {
    render() {
        const { match: { url } } = this.props;
        return (
            <Fragment>
                <Route exact path={`${url}/:id`} render={() => <PostDetail {...this.props}/>} />
            </Fragment>
        )
    }
}

export default connect(
    mapStateToProps,
    { ...PostActions }
)(Container);