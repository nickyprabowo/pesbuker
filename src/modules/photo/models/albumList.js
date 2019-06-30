import blankImage from  "../../../assets/img/no-image.svg";

const albumList = albums => {
    return albums.map(album => ({
        id: album.id,
        title: album.title,
        thumbnail: album.thumbnail ? album.thumbnail : blankImage
    }))
}

export default albumList;