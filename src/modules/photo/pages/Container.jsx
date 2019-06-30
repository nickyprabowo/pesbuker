import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import AlbumDetail from "./AlbumDetail";

import * as PhotoActions from "../actions";

function mapStateToProps(state){
    const { photo } = state;

    return {
        ...photo,
    }
}

class Container extends Component {
    render() {
        const { match: { url } } = this.props;
        return (
            <Fragment>
                <Route exact path={`${url}/:id`} render={() => <AlbumDetail {...this.props}/>} />
            </Fragment>
        )
    }
}

export default connect(
    mapStateToProps,
    { ...PhotoActions }
)(Container);