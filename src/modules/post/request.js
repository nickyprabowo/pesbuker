import API from "../../variables/APIs";
import handleResponse from "../../helpers/handleResponse";

export const fetchPostsByUser = userId => {
    return new Promise((resolve, reject) => {
        fetch(`${API.post}?userId=${userId}`, {
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