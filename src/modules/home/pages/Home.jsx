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
            deleteModal: false,
            selectedPost: {}
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

    handleSubmitPost = e => {
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
            selectedPost: {
                ...state.selectedPost,
                [name]: value
            }
        }))
    }

    selectPostToUpdate = post => {
        this.toggleEditModal();
        this.setState({
            selectedPost: post
        })
    }

    toggleEditModal = () => {
        this.setState((state) => ({
            editModal: !state.editModal,
            selectedPost: {}
        }))
    }

    handleUpdatePost = () => {
        const { selectedPost: { id, title, body } } = this.state;
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
                selectedPost: {
                    id: "",
                    title: "",
                    body: ""
                }
            }, () => this.toggleEditModal())
        }else return
    }

    toggleDeleteModal = () => {
        this.setState((state) => ({
            deleteModal: !state.deleteModal,
            selectedPost: {}
        }))
    }

    selectPostToDelete = post => {
        this.toggleDeleteModal();
        this.setState({
            selectedPost: post
        })
    }

    handleDeletePost = () => {
        const { selectedPost: { id } } = this.state;
        const { deletePost } = this.props;
        deletePost(id);
        this.toggleDeleteModal();
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
        const { title, body, selectedPost, editModal, deleteModal } = this.state;
        const { posts, selectedUser, albums } = this.props;
        return (
            <Fragment>
                <CoolModal 
                    modalOpen={editModal}
                    handleClose={this.toggleEditModal}
                    data={selectedPost}
                    renderContent={(post) => (
                        <PostingForm
                            title={post.title}
                            body={post.body}
                            onInputChange={this.handleEditChange}
                        />
                    )}
                    renderAction={<Button onClick={() => this.handleUpdatePost()} primary>Update</Button>}
                />
                <CoolModal 
                    modalOpen={deleteModal}
                    handleClose={this.toggleDeleteModal}
                    data={selectedPost}
                    renderContent={() => (
                        <p>Are you sure to delete this post ?</p>
                    )}
                    renderAction={<Button onClick={() => this.handleDeletePost()} primary>Delete</Button>}
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
                                onInputChange={this.handleInputChange}
                                onSubmit={this.handleSubmitPost}
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
                                    deletable={true}
                                    onEdit={this.selectPostToUpdate}
                                    onDelete={this.selectPostToDelete}
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
