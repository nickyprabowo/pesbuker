const initialState = {
    albums: [],
    selectedAlbum: {},
    selectedPhoto: {},
    photoAsyncState: "idle",
    albumAsyncState: "idle",
    photos: []
}

export default function photo(state=initialState, action) {
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

        case "FETCH_ALBUM_BY_ID_REQUEST": {
            return {
                ...state,
                albumAsyncState: "loading"
            };
        }

        case "FETCH_ALBUM_BY_ID_SUCCESS": {
            return {
                ...state,
                selectedAlbum: action.payload.data,
                albumAsyncState: "loaded"
            };
        }

        case "FETCH_ALBUM_BY_ID_ERROR": {
            return {
                ...state,
                albumAsyncState: "error"
            };
        }

        case "FETCH_PHOTOS_BY_ALBUM_REQUEST": {
            return {
                ...state,
                photoAsyncState: "loading"
            };
        }

        case "FETCH_PHOTOS_BY_ALBUM_SUCCESS": {
            return {
                ...state,
                photos: action.payload.data,
                photoAsyncState: "loaded"
            };
        }

        case "FETCH_PHOTOS_BY_ALBUM_ERROR": {
            return {
                ...state,
                photoAsyncState: "error"
            };
        }

        case "FETCH_PHOTO_BY_ID_REQUEST": {
            return {
                ...state,
                photoAsyncState: "loading"
            };
        }

        case "FETCH_PHOTO_BY_ID_SUCCESS": {
            return {
                ...state,
                selectedPhoto: action.payload.data,
                photoAsyncState: "loaded"
            };
        }

        case "FETCH_PHOTO_BY_ID_ERROR": {
            return {
                ...state,
                photoAsyncState: "error"
            };
        }

        case "SELECT_ALBUM": {
            return {
              ...state,
              selectedAlbum: action.payload.data
            }
          }

        default: {
            return state;
        }
    }
}