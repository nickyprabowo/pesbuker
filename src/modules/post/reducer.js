const initialState = {
    posts: [],
    postAsyncState: "idle",
    selectedPost: {}
}

export default function post(state=initialState, action) {
    switch(action.type) {
        case "GET_POSTS_BY_USER_REQUEST": {
            return {
                ...state,
                postAsyncState: "loading"
            }
        }

        case "GET_POSTS_BY_USER_SUCCESS": {
            return {
                ...state,
                posts: action.payload.data,
                postAsyncState: "loaded"
            }
        }

        case "GET_POSTS_BY_USER_ERROR": {
            return {
                ...state,
                postAsyncState: "error"
            }
        }

        case "GET_POST_BY_ID_REQUEST": {
            return {
                ...state,
                postAsyncState: "loading"
            }
        }

        case "GET_POST_BY_ID_SUCCESS": {
            return {
                ...state,
                selectedPost: action.payload.data,
                postAsyncState: "loaded"
            }
        }

        case "GET_POST_BY_ID_ERROR": {
            return {
                ...state,
                postAsyncState: "error"
            }
        }

        case "SELECT_POST": {
            return {
                ...state,
                selectedPost: action.payload.data
            }
        }

        default: {
            return state
        }
    }
}