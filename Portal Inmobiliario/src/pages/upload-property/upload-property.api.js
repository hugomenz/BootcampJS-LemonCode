import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const uploadProperty = (data) => Axios.post(url, data).then(response =>{
    return response.data;
});