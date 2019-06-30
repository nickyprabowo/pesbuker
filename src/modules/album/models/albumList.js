const albumList = albums => {
    return albums.map(album => ({
        id: album.id,
        title: album.title
    }))
}

export default albumList;