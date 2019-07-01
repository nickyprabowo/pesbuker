import React, { Component, Fragment } from 'react'
import { Grid, Header, Button, Icon, Comment } from "semantic-ui-react";
// Components
import Loading from "../../../shared-components/Loading";
import CoolComment from "../components/CoolComment";
import CommentForm from "../components/CommentForm";
import CoolModal from "../../../shared-components/CoolModal";

export default class PostDetail extends Component {
    constructor(props){
        super()
        this.state = {
            comment: {
                name: "",
                email: "",
                body: ""
            },
            editModal: false,
            deleteModal: false,
            selectedComment: {}
        }
    }

    componentDidMount = () => {
        const { getPostById,
            getCommentsByPost,
            selectedPost: { id }
        } = this.props;
        getPostById(id);
        getCommentsByPost(id);
    }

    previousPage = () => {
        const {
            history: { goBack }
        } = this.props;
        goBack();
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState((state) => ({
            comment: {
                ...state.comment,
                [name]: value
            }
        }))
    }

    handleSubmitComment = () => {
        const { comment } = this.state;
        const { createComment } = this.props
        createComment(comment);
        this.setState({
            comment: {
                name: "",
                email: "",
                body: ""
            }
        })
    }

    selectCommentToUpdate = comment => {
        this.toggleEditModal();
        this.setState({
            selectedComment: comment
        });
    }

    toggleEditModal = () => {
        this.setState((state) => ({
            editModal: !state.editModal,
            selectedComment: {}
        }));
    }

    handleEditChange = e => {
        const { name, value } = e.target;
        this.setState((state) => ({
            selectedComment: {
                ...state.selectedComment,
                [name]: value
            }
        }))
    }

    handleUpdateComment = () => {
        const { selectedComment: { id, name, body, email } } = this.state;
        const { updateComment } = this.props;
        if(name && body && email){
            const newComment = {
                id,
                name,
                body,
                email,
                userId: 1
            }
            updateComment(newComment);
            this.setState({
                selectedComment: {
                    id: "",
                    name: "",
                    body: "",
                    email: ""
                }
            }, () => this.toggleEditModal())
        }else return
    }

    selectCommentToDelete = comment => {
        this.toggleDeleteModal();
        this.setState({
            selectedComment: comment
        });
    }

    toggleDeleteModal = () => {
        this.setState((state) => ({
            deleteModal: !state.deleteModal,
            selectedComment: {}
        }));
    }

    handleDeleteComment = () => {
        const { selectedComment: { id } } = this.state;
        const { deleteComment } = this.props;
        deleteComment(id);
        this.toggleDeleteModal();
    }

    render() {
        const { comment, editModal, deleteModal, selectedComment } = this.state;
        const { 
            selectedPost: { 
                title,
                body 
            },
            comments
        } = this.props;
        return (
            <Fragment>
                {!title && <Loading />}
                <CoolModal 
                    modalOpen={editModal}
                    handleClose={this.toggleEditModal}
                    data={selectedComment}
                    renderContent={(post) => (
                        <CommentForm
                            {...post}
                            onInputChange={this.handleEditChange}
                        />
                    )}
                    renderAction={<Button onClick={() => this.handleUpdateComment()} primary>Update</Button>}
                />
                <CoolModal 
                    modalOpen={deleteModal}
                    handleClose={this.toggleDeleteModal}
                    data={selectedComment}
                    renderContent={() => (
                        <p>Are you sure to delete this comment ?</p>
                    )}
                    renderAction={<Button onClick={() => this.handleDeleteComment()} primary>Delete</Button>}
                />
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Button icon labelPosition='left' onClick={this.previousPage}>
                                Back
                                <Icon name='left arrow' />
                            </Button>
                            <Header as='h1'>{title}</Header>
                        </Grid.Column>
                    </Grid.Row>    
                    <Grid.Row>
                        <Grid.Column>
                            <p>{body}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Comment.Group>
                                <Header as='h3' dividing>
                                Comments
                                </Header>
                                <CommentForm
                                    {...comment}
                                    onInputChange={this.handleInputChange}
                                    onSubmit={this.handleSubmitComment}
                                />
                                {comments.map(comment => (
                                    <CoolComment
                                        key={comment.id}
                                        {...comment}
                                        onEdit={this.selectCommentToUpdate}
                                        onDelete={this.selectCommentToDelete}
                                    />
                                )
                                )}
                            </Comment.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Fragment>
        )
    }
}
