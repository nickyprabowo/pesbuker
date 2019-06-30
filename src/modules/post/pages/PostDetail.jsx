import React, { Component, Fragment } from 'react'
import { Grid, Header, Button, Icon, Comment } from "semantic-ui-react";
// Components
import Loading from "../../../shared-components/Loading";
import CoolComment from "../../../shared-components/CoolComment";

export default class PostDetail extends Component {
    constructor(props){
        super()
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

    render() {
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
                                {comments.map(comment => (
                                    <CoolComment
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
