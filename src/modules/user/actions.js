import makeActionCreator from "../../helpers/makeActionCreator";
import { fetchAllUsers } from "./request";
import userListModel from "./model/userList_m";

const getAllUsersRequest = makeActionCreator("FETCH_ALL_USERS_REQUEST");
const getAllUsersSuccess = makeActionCreator("FETCH_ALL_USERS_SUCCESS");
const getAllUsersError = makeActionCreator("FETCH_ALL_USERS_ERROR");

const selectUser = makeActionCreator("SELECT_USER");

export const getAllUsers = () => dispatch => {
    dispatch(getAllUsersRequest());
    fetchAllUsers()
        .then(data => userListModel(data))
        .then(cleanData => dispatch(getAllUsersSuccess({ data: cleanData })))
        .catch(error => dispatch(getAllUsersError(error)))
}

export const pickUser = (id, cb) => dispatch => {
    dispatch(selectUser({ data: id }));
    if (cb instanceof Function) cb();
}