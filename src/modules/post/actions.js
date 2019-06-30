import makeActionCreator from "../../helpers/makeActionCreator";
import { fetchPostsByUser, fetchPostsById } from "./request";
import postListModel from "./models/postList";
import postDetailModel from "./models/postDetail";

const getPostsByUserRequest = makeActionCreator("GET_POSTS_BY_USER_REQUEST");
const getPostsByUserSuccess = makeActionCreator("GET_POSTS_BY_USER_SUCCESS");
const getPostsByUserError = makeActionCreator("GET_POSTS_BY_USER_ERROR");

const getPostByIdRequest = makeActionCreator("GET_POST_BY_ID_REQUEST");
const getPostByIdSuccess = makeActionCreator("GET_POST_BY_ID_SUCCESS");
const getPostByIdError = makeActionCreator("GET_POST_BY_ID_ERROR");

const selectPost = makeActionCreator("SELECT_POST");

export const getPostsByUser = userId => dispatch => {
    dispatch(getPostsByUserRequest());
    fetchPostsByUser(userId)
        .then(data => postListModel(data))
        .then(cleanData => dispatch(getPostsByUserSuccess({data: cleanData})))
        .catch(error => dispatch(getPostsByUserError(error)))
}

export const getPostById = id => dispatch => {
    dispatch(getPostByIdRequest());
    fetchPostsById(id)
        .then(data => postDetailModel(data))
        .then(cleanData => dispatch(getPostByIdSuccess({data: cleanData})))
        .catch(error => dispatch(getPostByIdError(error)))
}

export const pickPost = (id, cb) => dispatch => {
    dispatch(selectPost({
        data: {
            id
        }
    }));
    if (cb instanceof Function) cb();
}