const initialState = {
    posts: [],
    postAsyncState: "idle",
    selectedPost: {},
    comments: []
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

        case "GET_COMMENTS_BY_POST_REQUEST": {
            return {
                ...state,
                postAsyncState: "loading"
            }
        }

        case "GET_COMMENTS_BY_POST_SUCCESS": {
            return {
                ...state,
                comments: action.payload.data,
                postAsyncState: "loaded"
            }
        }

        case "GET_COMMENTS_BY_POST_ERROR": {
            return {
                ...state,
                postAsyncState: "error"
            }
        }

        case "CREATE_POST_REQUEST": {
            return {
                ...state,
                postAsyncState: "loading"
            }
        }

        case "CREATE_POST_SUCCESS": {
            return {
                ...state,
                posts: [
                    action.payload.data,
                    ...state.posts
                ],
                postAsyncState: "loading"
            }
        }

        case "CREATE_POST_ERROR": {
            return {
                ...state,
                postAsyncState: "error"
            }
        }

        case "UPDATE_POST_REQUEST": {
            return {
                ...state,
                postAsyncState: "loading"
            }
        }

        case "UPDATE_POST_SUCCESS": {
            console.log(action.payload)
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if( post.id !== action.payload.data.id ){
                        return post
                    }
                    return {
                        ...post,
                        ...action.payload.data
                    }
                }),
                postAsyncState: "loading"
            }
        }

        case "UPDATE_POST_ERROR": {
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