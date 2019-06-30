import makeActionCreator from "../../helpers/makeActionCreator";
import { fetchAlbumsByUser } from "./request";
import albumListModel from "./models/albumList";

const getAlbumsByUserRequest = makeActionCreator("FETCH_ALBUMS_BY_USER_REQUEST");
const getAlbumsByUserSuccess = makeActionCreator("FETCH_ALBUMS_BY_USER_SUCCESS");
const getAlbumsByUserError = makeActionCreator("FETCH_ALBUMS_BY_USER_ERROR");

export const getAlbumsByUser = userId => dispatch => {
    dispatch(getAlbumsByUserRequest());
    fetchAlbumsByUser(userId)
        .then(data => albumListModel(data))
        .then(cleanData => dispatch(getAlbumsByUserSuccess({data: cleanData})))
        .catch(error => dispatch(getAlbumsByUserError(error)))
}