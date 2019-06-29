import API from "../../variables/APIs";
import handleResponse from "../../helpers/handleResponse";

export const fetchAllUsers = () => {
    return new Promise((resolve, reject) => {
        fetch(API.user, {
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