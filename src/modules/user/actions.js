import makeActionCreator from "../../helpers/makeActionCreator";
import { fetchAllUsers, fetchUserById } from "./request";
import userListModel from "./model/userList_m";
import userDetailModel from "./model/userDetail_m";

const getAllUsersRequest = makeActionCreator("FETCH_ALL_USERS_REQUEST");
const getAllUsersSuccess = makeActionCreator("FETCH_ALL_USERS_SUCCESS");
const getAllUsersError = makeActionCreator("FETCH_ALL_USERS_ERROR");

const getUserByIdRequest = makeActionCreator("FETCH_USER_BY_ID_REQUEST");
const getUserByIdSuccess = makeActionCreator("FETCH_USER_BY_ID_SUCCESS");
const getUserByIdError = makeActionCreator("FETCH_USER_BY_ID_ERROR");

const selectUser = makeActionCreator("SELECT_USER");

export const getAllUsers = () => dispatch => {
    dispatch(getAllUsersRequest());
    fetchAllUsers()
        .then(data => userListModel(data))
        .then(cleanData => dispatch(getAllUsersSuccess({ data: cleanData })))
        .catch(error => dispatch(getAllUsersError(error)))
}

export const getUserById = id => dispatch => {
    dispatch(getUserByIdRequest());
    fetchUserById(id)
        .then(data => userDetailModel(data))
        .then(cleanData => dispatch(getUserByIdSuccess({data: cleanData})))
        .catch(error => dispatch(getUserByIdError(error)))
}

export const pickUser = (id, cb) => dispatch => {
    dispatch(selectUser({ 
        data: {
            userId: id
        }
    }));
    if (cb instanceof Function) cb();
}