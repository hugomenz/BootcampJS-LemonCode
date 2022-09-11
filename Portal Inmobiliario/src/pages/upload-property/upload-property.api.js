import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const uploadProperty = (data) => Axios.post(url, data).then(response =>{
    return response.data;
});

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`

export const getProvinceByName = (province) => Axios.get(provinceListUrl, {params: {province}}).then(response => {
    return response.data;
});