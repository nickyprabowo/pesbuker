const initialState = {
    posts: [],
    postAsyncState: "idle"
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

        default: {
            return state
        }
    }
}