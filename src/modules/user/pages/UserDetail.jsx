import React, { Component } from 'react'
import { Grid, Item, Card } from "semantic-ui-react";

import UserProfile from "../components/UserProfile";
import PostItem from "../../post/components/PostItem";
import AlbumItem from '../../photo/components/AlbumItem';

// komponen untuk menampilkan profil , album, dan daftar artikel dari suatu User
export default class UserDetail extends Component {
  constructor(props){
    super()
  }

  componentDidMount = () => {
    const {
      getUserById,
      getPostsByUser,
      getAlbumsByUser,
      selectedUser: { userId }
    } = this.props;
    getUserById(userId);
    getPostsByUser(userId);
    getAlbumsByUser(userId);
  }

  handlePostSelection = id => {
    const {
        history: { push },
        pickPost
    } = this.props;
    pickPost(id, () => push('/post/' + id));
  }

  handleAlbumSelection = id => {
    const {
        history: { push },
        pickAlbum
    } = this.props;
    pickAlbum(id, () => push('/photos/' + id));
  }

  render() {
    const {
      selectedUser,
      posts,
      albums
    } = this.props;
      return (
          <Grid stackable>
            <Grid.Row centered>
              <Grid.Column width={5}>
                <UserProfile
                  {...selectedUser}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={6}>
                <h2>Albums</h2>
                <Card.Group itemsPerRow={3}>
                  {albums.map(album => (
                    <AlbumItem
                      key={album.id}
                      {...album}
                      onSelect={this.handleAlbumSelection}
                    />)
                  )}
                </Card.Group>
              </Grid.Column>
              <Grid.Column width={10}>
                <h2>Posts</h2>
                <Item.Group divided>
                  {posts.map(post => (
                    <PostItem
                      key={post.id}
                      {...post}
                      onSelect={this.handlePostSelection}
                    />
                  ))}
                </Item.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      )
  }
}
