import makeActionCreator from "../../helpers/makeActionCreator";
import {
    fetchPostsByUser,
    fetchPostsById,
    fetchCommentsByPost,
    postArticle,
    updateArticle,
    deleteArticle
} from "./request";
import postListModel from "./models/postList";
import postDetailModel from "./models/postDetail";

const getPostsByUserRequest = makeActionCreator("GET_POSTS_BY_USER_REQUEST");
const getPostsByUserSuccess = makeActionCreator("GET_POSTS_BY_USER_SUCCESS");
const getPostsByUserError = makeActionCreator("GET_POSTS_BY_USER_ERROR");

const getPostByIdRequest = makeActionCreator("GET_POST_BY_ID_REQUEST");
const getPostByIdSuccess = makeActionCreator("GET_POST_BY_ID_SUCCESS");
const getPostByIdError = makeActionCreator("GET_POST_BY_ID_ERROR");

const getCommentsByPostRequest = makeActionCreator("GET_COMMENTS_BY_POST_REQUEST");
const getCommentsByPostSuccess = makeActionCreator("GET_COMMENTS_BY_POST_SUCCESS");
const getCommentsByPostError = makeActionCreator("GET_COMMENTS_BY_POST_ERROR");

const createPostRequest = makeActionCreator("CREATE_POST_REQUEST");
const createPostSuccess = makeActionCreator("CREATE_POST_SUCCESS");
const createPostError = makeActionCreator("CREATE_POST_ERROR");

const updatePostRequest = makeActionCreator("UPDATE_POST_REQUEST");
const updatePostSuccess = makeActionCreator("UPDATE_POST_SUCCESS");
const updatePostError = makeActionCreator("UPDATE_POST_ERROR");

const deletePostRequest = makeActionCreator("DELETE_POST_REQUEST");
const deletePostSuccess = makeActionCreator("DELETE_POST_SUCCESS");
const deletePostError = makeActionCreator("DELETE_POST_ERROR");

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

export const getCommentsByPost = postId => dispatch => {
    dispatch(getCommentsByPostRequest());
    fetchCommentsByPost(postId)
        .then(data => dispatch(getCommentsByPostSuccess({ data })))
        .catch(error => dispatch(getCommentsByPostError(error)))
}

export const createPost = post => dispatch => {
    dispatch(createPostRequest());
    postArticle(post)
        .then(data => postDetailModel(data))
        .then(cleanData => dispatch(createPostSuccess({ data: cleanData })))
        .catch(error => dispatch(createPostError(error)))
}

export const updatePost = post => dispatch => {
    dispatch(updatePostRequest());
    updateArticle(post)
        .then(data => postDetailModel(data))
        .then(cleanData => dispatch(updatePostSuccess({ data: cleanData })))
        .catch(error => dispatch(updatePostError(error)))
}

export const deletePost = id => dispatch => {
    dispatch(deletePostRequest());
    deleteArticle(id)
        .then(() => dispatch(deletePostSuccess({ data: id })))
        .catch(error => dispatch(deletePostError(error)))
}

export const pickPost = (id, cb) => dispatch => {
    dispatch(selectPost({
        data: {
            id
        }
    }));
    if (cb instanceof Function) cb();
}