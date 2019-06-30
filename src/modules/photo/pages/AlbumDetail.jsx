import React, { Component, Fragment } from 'react'
import { Grid, Header, Card, Button, Icon } from "semantic-ui-react";
import Loading from "../../../shared-components/Loading";
import AlbumItem from "../components/AlbumItem";

export default class AlbumDetail extends Component {
    constructor(props){
        super();
    }
    
    componentDidMount = () => {
        const {
            getAlbumById,
            getPhotosByAlbum,
            selectedAlbum: { id }
        } = this.props;
        getAlbumById(id);
        getPhotosByAlbum(id);
    }

    previousPage = () => {
        const {
            history: { goBack }
        } = this.props;
        goBack();
    }

    render() {
        const {
            selectedAlbum: { title },
            photoAsyncState,
            albumAsyncState,
            photos
        } = this.props;
        return (
            <Fragment>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                {albumAsyncState === "loading" &&
                                    <Loading/>
                                }
                                {albumAsyncState === "loaded" &&
                                    <Fragment>
                                        <Button icon labelPosition='left' onClick={this.previousPage}>
                                            Back
                                            <Icon name='left arrow' />
                                        </Button>
                                        <Header as='h1'>Album "{title}"</Header>
                                    </Fragment>
                                }
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                {photoAsyncState === "loading" &&
                                    <Loading/>
                                }
                                {photoAsyncState === "loaded" &&
                                    <Card.Group itemsPerRow={3}>
                                        {photos.map(photo => (
                                            <AlbumItem
                                                id={photo.id}
                                                thumbnail={photo.thumbnailUrl}
                                                title={photo.title}
                                            />)
                                        )}
                                    </Card.Group>
                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Fragment>
        )
    }
}
