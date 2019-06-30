import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"
import { Grid, Container } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

import Home from "./modules/home/pages/Home";
import UserContainer from "./modules/user/Container";
import PostContainer from "./modules/post/pages/Container";
import PhotoContainer from "./modules/photo/pages/Container";
import Navbar from "./shared-components/Navbar";

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Grid container className="App">
            <Navbar />
            <Grid.Row style={{ marginTop: "5rem" }}>
              <Grid.Column className="main-content">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/friends" component={UserContainer} />
                    <Route path="/post" component={PostContainer} />
                    <Route path="/photos" component={PhotoContainer} />
                  </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </BrowserRouter>
      </Provider>
    );
  };
}
