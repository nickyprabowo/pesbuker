import makeActionCreator from "../../helpers/makeActionCreator";
import { fetchPostsByUser } from "./request";
import postListModel from "./models/postList";

const getPostsByUserRequest = makeActionCreator("GET_POSTS_BY_USER_REQUEST");
const getPostsByUserSuccess = makeActionCreator("GET_POSTS_BY_USER_SUCCESS");
const getPostsByUserError = makeActionCreator("GET_POSTS_BY_USER_ERROR");

export const getPostsByUser = userId => dispatch => {
    dispatch(getPostsByUserRequest());
    fetchPostsByUser(userId)
        .then(data => postListModel(data))
        .then(cleanData => dispatch(getPostsByUserSuccess({data: cleanData})))
        .catch(error => dispatch(getPostsByUserError(error)))
}