import React, { Component, Fragment } from 'react'
import { Grid, Header, Card, Button, Icon, Image } from "semantic-ui-react";
// Components
import Loading from "../../../shared-components/Loading";
import AlbumItem from "../components/AlbumItem";
import CoolModal from "../../../shared-components/CoolModal";

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

    handlePhotoSelection = id => {
        const {
            toggleModal,
            getPhotoById
        } = this.props;
        toggleModal();
        getPhotoById(id)
    }

    closePhotoModal = () => {
        const {
            toggleModal
        } = this.props;
        toggleModal();
    }

    render() {
        const {
            selectedAlbum: { title },
            photoAsyncState,
            albumAsyncState,
            photos,
            togglePhoto,
            selectedPhoto
        } = this.props;
        return (
            <Fragment>
                <CoolModal 
                    modalOpen={togglePhoto}
                    handleClose={this.closePhotoModal}
                    data={selectedPhoto}
                    renderContent={(photo) => (
                        <Image src={photo.url} wrapped size="medium" centered />
                    )}
                />
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
                                            onSelect={this.handlePhotoSelection}
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
