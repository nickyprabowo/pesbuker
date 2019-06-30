import makeActionCreator from "../../helpers/makeActionCreator";
import {
    fetchAlbumsByUser,
    fetchAlbumById,
    fetchPhotosByAlbum,
    fetchPhotoById
} from "./request";
import albumListModel from "./models/albumList";

const getAlbumsByUserRequest = makeActionCreator("FETCH_ALBUMS_BY_USER_REQUEST");
const getAlbumsByUserSuccess = makeActionCreator("FETCH_ALBUMS_BY_USER_SUCCESS");
const getAlbumsByUserError = makeActionCreator("FETCH_ALBUMS_BY_USER_ERROR");

const getAlbumByIdRequest = makeActionCreator("FETCH_ALBUM_BY_ID_REQUEST");
const getAlbumByIdSuccess = makeActionCreator("FETCH_ALBUM_BY_ID_SUCCESS");
const getAlbumByIdError = makeActionCreator("FETCH_ALBUM_BY_ID_ERROR");

const getPhotosByAlbumRequest = makeActionCreator("FETCH_PHOTOS_BY_ALBUM_REQUEST");
const getPhotosByAlbumSuccess = makeActionCreator("FETCH_PHOTOS_BY_ALBUM_SUCCESS");
const getPhotosByAlbumError = makeActionCreator("FETCH_PHOTOS_BY_ALBUM_ERROR");

const getPhotoByIdRequest = makeActionCreator("FETCH_PHOTO_BY_ID_REQUEST");
const getPhotoByIdSuccess = makeActionCreator("FETCH_PHOTO_BY_ID_SUCCESS");
const getPhotoByIdError = makeActionCreator("FETCH_PHOTO_BY_ID_ERROR");

const selectAlbum = makeActionCreator("SELECT_ALBUM");

export const getAlbumsByUser = userId => dispatch => {
    dispatch(getAlbumsByUserRequest());
    fetchAlbumsByUser(userId)
        .then(data => albumListModel(data))
        .then(cleanData => dispatch(getAlbumsByUserSuccess({data: cleanData})))
        .catch(error => dispatch(getAlbumsByUserError(error)))
}

export const getAlbumById = id => dispatch => {
    dispatch(getAlbumByIdRequest());
    fetchAlbumById(id)
        .then(data => dispatch(getAlbumByIdSuccess({ data })))
        .catch(error => dispatch(getAlbumByIdError(error)))
}

export const getPhotosByAlbum = albumId => dispatch => {
    dispatch(getPhotosByAlbumRequest());
    fetchPhotosByAlbum(albumId)
        .then(data => dispatch(getPhotosByAlbumSuccess({ data })))
        .catch(error => dispatch(getPhotosByAlbumError(error)))
}

export const getPhotoById = id => dispatch => {
    dispatch(getPhotoByIdRequest());
    fetchPhotoById(id)
        .then(data => dispatch(getPhotoByIdSuccess({ data })))
        .catch(error => dispatch(getPhotoByIdError(error)))
}

export const pickAlbum = (id, cb) => dispatch => {
    dispatch(selectAlbum({
        data: {
            id
        }
    }));
    if (cb instanceof Function) cb();
}