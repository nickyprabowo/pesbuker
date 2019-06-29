import React, { Component } from 'react'
import { Grid, Header, Icon, List, Item } from "semantic-ui-react";

import PostItem from "../../post/components/PostItem";

export default class UserDetail extends Component {
  constructor(props){
    super()
  }

  componentDidMount = () => {
    const {
      getUserById,
      getPostsByUser,
      selectedUser
    } = this.props;
    getUserById(selectedUser);
    getPostsByUser(selectedUser);
  }

  render() {
    const {
      selectedUser: {
        userId,
        username,
        name,
        email,
        address,
        phone,
        company
      },
      posts
    } = this.props;
      return (
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as='h2' icon textAlign='center'>
                  <Icon name='user' circular/>
                  <Header.Content>
                    {username}
                    <Header.Subheader>{name}</Header.Subheader>
                  </Header.Content>
                </Header>  
              </Grid.Column>    
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column width={6}>
                <List>
                    <List.Item icon='marker' content={address} />
                    <List.Item icon='phone' content={phone} />
                    <List.Item
                        icon='mail'
                        content={<a href={email}>{email}</a>}
                    />
                    <List.Item icon='briefcase' content={company} />
                </List>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                album
              </Grid.Column>
              <Grid.Column width={12}>
                <Item.Group>
                  {posts.map(post => (<PostItem {...post} />))}
                </Item.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      )
  }
}
