// fungsi untuk membaca response API
const handleResponse = response => {
    if(response.ok){
        return response.json();
    }
    return response.statusText();
}

export default handleResponse;