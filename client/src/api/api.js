import axios from 'axios';

const API_URI = 'http://localhost:8080';

export const API = async (urlObject, data = {}, type='') => {
    console.log(type);
    return await axios({
        method: urlObject.method,
        url: `${API_URI}/${urlObject.path}/${type}`,
        data: data
    });
}
