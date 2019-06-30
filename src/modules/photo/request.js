import API from "../../variables/APIs";
import handleResponse from "../../helpers/handleResponse";

export const fetchAlbumsByUser = userId => {
    return new Promise((resolve, reject) => {
        fetch(`${API.album}?userId=${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(handleResponse)
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
}

export const fetchAlbumById = id => {
    return new Promise((resolve, reject) => {
        fetch(`${API.album}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(handleResponse)
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
}

export const fetchPhotosByAlbum = albumId => {
    return new Promise((resolve, reject) => {
        fetch(`${API.photo}?albumId=${albumId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(handleResponse)
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
}

export const fetchPhotoById = id => {
    return new Promise((resolve, reject) => {
        fetch(`${API.photo}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(handleResponse)
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
}