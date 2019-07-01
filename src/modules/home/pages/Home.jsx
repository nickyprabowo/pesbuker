import React, { Component, Fragment } from 'react';
import {
    Grid,
    Header,
    Item,
    Card,
    Button
} from "semantic-ui-react";

import UserProfile from "../../user/components/UserProfile";
import PostingForm from "../components/PostingForm";
import EditForm from "../components/EditForm";
import PostItem from "../../post/components/PostItem";
import AlbumItem from "../../photo/components/AlbumItem";
import CoolModal from "../../../shared-components/CoolModal";

export default class Home extends Component {
    constructor(props){
        super()
        this.state = {
            title: "",
            body: "",
            editModal: false,
            editedPost: {}
        }
    }

    componentDidMount = () => {
        const { getPostsByUser, getUserById, getAlbumsByUser } = this.props;
        getUserById(1);
        getPostsByUser(1);
        getAlbumsByUser(1);
    }

    handleInputChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { title, body } = this.state;
        const { createPost } = this.props;
        if(title && body){
            const newPost = {
                title,
                body,
                userId: 99
            }
            createPost(newPost);
            this.setState({
                title: "",
                body: ""
            })
        }else return
    }

    handleEditChange = e => {
        const { name, value } = e.target;

        this.setState((state) => ({
            editedPost: {
                ...state.editedPost,
                [name]: value
            }
        }))
    }

    handleEditPost = post => {
        this.toggleEditModal();
        this.setState({
            editedPost: post
        })
    }

    toggleEditModal = () => {
        this.setState((state) => ({
            editModal: !state.editModal,
            editedPost: {}
        }))
    }

    handleUpdate = () => {
        const { editedPost: { id, title, body } } = this.state;
        const { updatePost } = this.props;
        if(title && body){
            const newPost = {
                id,
                title,
                body,
                userId: 1
            }
            updatePost(newPost);
            this.setState({
                editedPost: {
                    id: "",
                    title: "",
                    body: ""
                }
            }, () => this.toggleEditModal())
        }else return
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
        const { title, body, editedPost, editModal } = this.state;
        const { posts, selectedUser, albums } = this.props;
        return (
            <Fragment>
                <CoolModal 
                    modalOpen={editModal}
                    handleClose={this.toggleEditModal}
                    data={editedPost}
                    renderContent={(post) => (
                        <EditForm
                            title={post.title}
                            body={post.body}
                            onInputChange={this.handleEditChange}
                            onSubmit={this.handleUpdate}
                        />
                    )}
                    renderAction={<Button onClick={() => this.handleUpdate()} primary>Update</Button>}
                />
                <Grid stackable>
                    <Grid.Row centered>
                        <Grid.Column width={5}>
                            <UserProfile
                            {...selectedUser}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h2">What's on your mind ?</Header>
                            <PostingForm
                                title={title}
                                body={body}
                                onInputChange={this.handleEditChange}
                                onSubmit={this.handleSubmit}
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
                                    editable={true}
                                    onEdit={this.handleEditPost}
                                    onSelect={this.handlePostSelection}
                                />
                            ))}
                            </Item.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Fragment>
        )
    }
}
