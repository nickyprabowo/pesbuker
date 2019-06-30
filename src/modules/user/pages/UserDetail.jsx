import React, { Component } from 'react'
import { Grid, Header, Icon, List, Item, Card } from "semantic-ui-react";

import PostItem from "../../post/components/PostItem";
import AlbumItem from '../../album/components/AlbumItem';

export default class UserDetail extends Component {
  constructor(props){
    super()
  }

  componentDidMount = () => {
    const {
      getUserById,
      getPostsByUser,
      getAlbumsByUser,
      selectedUser
    } = this.props;
    getUserById(selectedUser);
    getPostsByUser(selectedUser);
    getAlbumsByUser(selectedUser);
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
      posts,
      albums
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
              <Grid.Column width={6}>
                <h2>Albums</h2>
                <Card.Group itemsPerRow={3}>
                  {albums.map(album => <AlbumItem {...album} />)}
                </Card.Group>
              </Grid.Column>
              <Grid.Column width={10}>
                <h2>Posts</h2>
                <Item.Group divided>
                  {posts.map(post => <PostItem {...post} />)}
                </Item.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      )
  }
}
