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
        const { getPostById, selectedPost: { id } } = this.props;
        getPostById(id);
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
            }
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
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Fragment>
        )
    }
}
