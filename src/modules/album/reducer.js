const initialState = {
    albums: [],
    selectedAlbum: {},
    albumAsyncState: "idle"
}

export default function album(state=initialState, action) {
    switch(action.type) {
        case "FETCH_ALBUMS_BY_USER_REQUEST": {
            return {
                ...state,
                albumAsyncState: "loading"
            };
        }

        case "FETCH_ALBUMS_BY_USER_SUCCESS": {
            return {
                ...state,
                albums: action.payload.data,
                albumAsyncState: "loaded"
            };
        }

        case "FETCH_ALBUMS_BY_USER_ERROR": {
            return {
                ...state,
                albumAsyncState: "error"
            };
        }

        default: {
            return state;
        }
    }
}