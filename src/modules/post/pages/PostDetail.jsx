import React, { Component, Fragment } from 'react'
import { Grid, Header, Button, Icon, Comment } from "semantic-ui-react";
// Components
import Loading from "../../../shared-components/Loading";
import CoolComment from "../components/CoolComment";
import CommentForm from "../components/CommentForm";

export default class PostDetail extends Component {
    constructor(props){
        super()
        this.state = {
            comment: {
                name: "",
                email: "",
                body: ""
            }
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

    render() {
        const { comment } = this.state;
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
                                        name={comment.name}
                                        email={comment.email}
                                        body={comment.body}
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
